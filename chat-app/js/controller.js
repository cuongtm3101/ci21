const controller = {};

controller.validateLoginInfo = (email, password) => {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {        
        view.renderErrorMessage('email-error-message', 'Please enter your email');
    }else if (!emailRegex.test(email)){        
        view.renderErrorMessage('email-error-message', 'Invalid email');
    }else{        
        view.renderErrorMessage('email-error-message', '');
    }

    if (!password) {        
        view.renderErrorMessage('password-error-message', 'Please enter your password');
    }else{
        view.renderErrorMessage('password-error-message', '');    
    }
    //check database
}
controller.validateRegisterInfo = (firstName, lastName, email, password, cpassword) => {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!firstName) {        
        view.renderErrorMessage('fname-error-message', 'Please enter your first name');
    }else{
        view.renderErrorMessage('fname-error-message', '');    
    }
    if (!lastName) {        
        view.renderErrorMessage('lname-error-message', 'Please enter your last name');
    }else{
        view.renderErrorMessage('lname-error-message', '');    
    }    
    
    if (!email) {        
        view.renderErrorMessage('email-error-message', 'Please enter your email');
    }else if (!emailRegex.test(email)){        
        view.renderErrorMessage('email-error-message', 'Invalid email');
    }else{        
        view.renderErrorMessage('email-error-message', '');
    }

    if (!password) {        
        view.renderErrorMessage('password-error-message', 'Please enter your password');
    }else{
        view.renderErrorMessage('password-error-message', '');    
    }
    if (!cpassword) {        
        view.renderErrorMessage('cpassword-error-message', 'Please enter your password');
    }else if (cpassword !== password){
        view.renderErrorMessage('cpassword-error-message', 'Password is not matched');    
    }else{
        view.renderErrorMessage('cpassword-error-message', '');
    }

    if (firstName && lastName && email && password && cpassword && cpassword === password) {
        model.createNewUser(firstName, lastName, email, password);
    }
}