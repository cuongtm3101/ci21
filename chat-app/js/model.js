const model = {};

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