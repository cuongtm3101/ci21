window.onload = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBGZ5uBbC-IyjooJCu2y1nh6ppW1bb-XgE",
        authDomain: "ci21-chatapp.firebaseapp.com",
        databaseURL: "https://ci21-chatapp.firebaseio.com",
        projectId: "ci21-chatapp",
        storageBucket: "ci21-chatapp.appspot.com",
        messagingSenderId: "511512362164",
        appId: "1:511512362164:web:76c17219d38a0f32"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log(firebase);
    view.setActiveScreen('loginPage');
}