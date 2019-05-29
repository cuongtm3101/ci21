const view = {};

view.setActiveScreen = (screenName) => {
    //show welcome screen
    // const app = document.getElementById('app');
    // if (app) {
    //     app.innerHTML = components.welcomePage;
    // }
    const app = document.getElementById('app');
    switch (screenName) {
        case ('loginPage'):
            if (app) {
                app.innerHTML = components.loginPage;
            }
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                console.log(loginForm);
                loginForm.addEventListener('submit', (event) => {

                    event.preventDefault();

                    const email = loginForm.email.value;
                    const password = loginForm.password.value;
                    controller.validateLoginInfo(email, password);
                })
            }
            const registerLink = document.getElementById('register-link');
            if (registerLink) {
                registerLink.addEventListener('click', () => {
                    view.setActiveScreen('registerPage');
                });
            }
            const resetPasswordLink = document.getElementById('reset-password-link');
            if (resetPasswordLink) {
                resetPasswordLink.addEventListener('click', () => {
                    console.log('haha');
                    view.setActiveScreen('resetPasswordPage');
                });
            }
            break;
        case ('registerPage'):
            if (app) {
                app.innerHTML = components.registerPage;
            }
            const registerForm = document.getElementById('login-form');
            if (registerForm) {
                console.log(registerForm);
                registerForm.addEventListener('submit', (event) => {

                    event.preventDefault();
                    const firstName = registerForm.fname.value;
                    const lastName = registerForm.lname.value;
                    const email = registerForm.email.value;
                    const password = registerForm.password.value;
                    const cpassword = registerForm.cpassword.value;
                    controller.validateRegisterInfo(firstName, lastName, email, password, cpassword);
                })
            }
            const loginLink = document.getElementById('login-link');
            if (loginLink) {
                loginLink.addEventListener('click', () => {
                    view.setActiveScreen('loginPage');
                });
            }
            break;
        case ('chatPage'):
            if (app) {
                app.innerHTML = components.chatPage;
            }
            const welcomeElement = document.getElementById('welcome');
            if (welcomeElement) {
                welcomeElement.innerText = `Welcome back ${model.loginUser.email}`;
            }
            break;

        case ('resetPasswordPage'):
            if (app) {
                app.innerHTML = components.resetPasswordPage;
            }
            const resetPasswordForm = document.getElementById('login-form');
            if (resetPasswordForm) {
                resetPasswordForm.addEventListener('submit', (event) => {

                    event.preventDefault();                    
                    const email = resetPasswordForm.email.value;
                    controller.validateResetEmail(email);
                })
            }
            const backLink = document.getElementById('back-link');
            if (backLink) {
                backLink.addEventListener('click', (event) => {
                    view.setActiveScreen('loginPage');
                    event.preventDefault();
                })
            }                
            break;

    }
}

view.renderErrorMessage = (id, text) => {
    const errorMessage = document.getElementById(id);
    if (errorMessage) {
        errorMessage.innerText = text;
    }
}

view.clearRegisterInfo = () => {
    const registerForm = document.getElementById('login-form');
    if (registerForm) {
        registerForm.fname.value = '';
        registerForm.lname.value = '';
        registerForm.email.value = '';
        registerForm.password.value = '';
        registerForm.cpassword.value = '';
    }
}
view.clearResetInfo = () => {
    const resetForm = document.getElementById('login-form');
    if (resetForm) {
        resetForm.email.value = '';
    }
}