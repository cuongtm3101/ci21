const model = {};
model.loginUser = undefined;
model.conversations = undefined;
model.createNewUser = (firstName, lastName, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) => {
        //console.log(registerResult);
        //update display name
        registerResult.user.updateProfile = {
            displayName : `${firstName} ${lastName}`
        };
        registerResult.user.sendEmailVerification();
        window.alert('Register success! Please check your email');
        view.clearRegisterInfo(); 
    })
    .catch((error) => {
        console.log(error);
        window.alert(error.code);
    })
}

model.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult)=>{
        //check email verified yet?
        if (loginResult.user.emailVerified) {
            model.loginUser = {
                id: loginResult.user.uid,
                displayName: loginResult.user.displayName,
                email:loginResult.user.email
            };
            view.setActiveScreen('chatPage');
        }else{
            window.alert('Please verify your email!');
        }
    })
    .catch((error)=>{
        console.log(error);
        window.alert(error.message);
    });
};

model.resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        window.alert('Please check your email');
        view.clearResetInfo();
    })
    .catch((error) => {
        console.log(error);
        window.alert('error.message');
    });
}


model.saveMessage = (newMessageContent) => {
    const newMessage = {
        content: newMessageContent,
        user: model.loginUser.email,
        createdAt: new Date(),
    };
    const db = firebase.firestore();
    db.collection('conversations')
    .doc('Ljr87mU3kZlwj2AoUlF1')
    .update({
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
    })
}


model.loadConversation = () => {
    db = firebase.firestore();
    db.collection('conversations')
    .where('users', 'array-contains', model.loginUser.email)
    .onSnapshot((snapshot) => {
        const conversations = [];
        snapshot.docs.forEach(element => {
            const conversation = element.data();
            conversation.id = element.id;
            conversations.push(conversation);
        });
        console.log(conversations);
        const activeConversation = conversations[0];
        
        if (model.conversations) {
            if (activeConversation) {
                const arrMessage = activeConversation.messages;
                let indexLength = arrMessage.length - 1;
                const newMessage = arrMessage[indexLength];
                if (newMessage.user === model.loginUser.email ) {               
                    view.sendMessage('', arrMessage[indexLength].content);
                }else{
                    view.sendMessage(newMessage.user, arrMessage[indexLength].content)
                }
             }    
        }else{
            model.conversations = conversations
            //render all message
            if (activeConversation) {
                activeConversation.messages.forEach((mess) => {
                    if (mess.user === model.loginUser.email) {
                        view.sendMessage('', mess.content);
                    }else{
                        view.sendMessage(mess.user, mess.content);
                    }
                })
            }
        }        
    })
}