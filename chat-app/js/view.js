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
            // Load all conversation
            model.loadConversation();
            const welcomeElement = document.getElementById('welcome');
            if (welcomeElement) {
                welcomeElement.innerText = `Welcome back ${model.loginUser.email}`;
            }
            const inputForm = document.querySelector('.input-form');
            if (inputForm) {
                inputForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const inputText = document.querySelector('.message');
                    if (inputText) {
                        let text = inputText.value;
                        const messageContainer = document.querySelector('.message-container');
                        if (messageContainer && text) {
                            //Save to database
                            model.saveMessage(text);
                            // view.sendMessage('', text);                            
                            // view.sendMessage('Mindx Botchat', text);
                            inputText.value = '';
                        }
                    }
                })
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

view.sendMessage = (sender, messageContent) => {
    const messageContainer = document.querySelector('.message-container');
    if (messageContainer) {
        const messageItem = document.createElement('div');
        const senderElement = document.createElement('div');
        const messageContentElement = document.createElement('div');

        messageItem.classList.add('message-item');
        if (sender) {
            messageItem.classList.add('other-message');
        }else{
            messageItem.classList.add('my-message');
        }
        senderElement.classList.add('sender');
        if (sender) {
            senderElement.innerText = sender;
        }
        messageContentElement.classList.add('message-content');
        messageContentElement.innerText = messageContent;

        messageItem.appendChild(senderElement);
        messageItem.appendChild(messageContentElement);
        messageContainer.appendChild(messageItem);

        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}