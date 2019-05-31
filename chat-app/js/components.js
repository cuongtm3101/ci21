const components = {};

components.loginPage = `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../images/logo.png" alt="logo">
            <h2 class="header">Sign in to New Wave</h2>
            <form id="login-form">
                <div class="form-first-part">
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                    <div class="title">Password</div>
                    <input type="password" name="password" placeholder="Please enter your password">
                    <div class="error" id="password-error-message"></div>                        
                    <input type="submit" value="Login">
                </div>                    
            </form>
            <div id="sign-up">
                <p id = 'register-link'>New to New Wave? Create an account</p>                
                <div id = 'reset-password-link'>Forget your password? Click here</div>
            </div>
        </div>
    </div>
`;

components.registerPage = `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../images/logo.png" alt="logo">
            <h2 class="header">Create new account</h2>
            <form id="login-form">
                <div class="form-first-part">
                    <div class="title">First Name</div>
                    <input type="text" name="fname" placeholder="Please enter your first name">                        
                    <div class="error" id="fname-error-message"></div>
                    <div class="title">Last Name</div>
                    <input type="text" name="lname" placeholder="Please enter your last name">
                    <div class="error" id="lname-error-message"></div>
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                    <div class="title">Password</div>
                    <input type="password" name="password" placeholder="Please enter your password">
                    <div class="error" id="password-error-message"></div>
                    <div class="title">Confirm Password</div>
                    <input type="password" name="cpassword" placeholder="Confirm your password">
                    <div class="error" id="cpassword-error-message"></div>                             
                    <input type="submit" value="Register">
                </div>                    
            </form>
            <div id="sign-up">
                <p id="login-link">Already have an account? Login here</p>
            </div>
        </div>
    </div>
`;
components.resetPasswordPage = `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../images/logo.png" alt="logo">
            <h2 class="header">Reset your password</h2>
            <form id="login-form">
                <div class="form-first-part">                    
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                                                 
                    <input type="submit" value="Reset Password">
                </div>                    
            </form>
            <div id="sign-up">
                <p id="back-link">Already have an account? Login here</p>
            </div>
        </div>
    </div>
`;
components.chatPage = `
<div id="chat-screen" class="chat-screen">
<div class="header">Mindx Chat</div>
<div class="chat-container">
    <div class="conversation-name">
        <h3>Chaturbate conversation</h3>
    </div>
    <div class="message-container">
        
    </div>
    <div class="message-form-container">
        <form class="input-form">
            <input type="text" name="message" class="message" placeholder="Type a message ...">
            <input type="submit" name="submit" class="btn" value="Send">        
        </form>
    </div>
</div>
</div>
`;