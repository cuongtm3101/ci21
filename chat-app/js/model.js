const model = {};
model.loginUser = undefined;
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