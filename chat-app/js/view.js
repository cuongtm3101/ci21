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