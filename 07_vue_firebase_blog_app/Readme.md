# Vue + Firebase + Blog APP

This project is Blog App that consist of vue + firebase.

## Setting Firebase

```
1. Go to firebase site and go to console.
2. Create Project (FireBLogs)
    https://console.firebase.google.com/project/fireblogs-b4b83/overview
3. Build ⇒ Authentication ⇒ Sign-in method  ⇒ Email/Password Enabled
4. Build ⇒ FireStore Database ⇒ Create database ⇒ Start in test mode ⇒ Cloud FireStore location (nam5) ⇒ Enabled
5. Project Overview ⇒ Web ⇒ App nickname(FireBlogs) ⇒ Register App
- Use npm
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "xxxxxxxx",
    authDomain: "fireblogs-b4b83.firebaseapp.com",
    projectId: "fireblogs-b4b83",
    storageBucket: "fireblogs-b4b83.appspot.com",
    messagingSenderId: "871674529444",
    appId: "1:871674529444:web:f7e038f6575ec2a4a04831"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

- Use Script
    <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "xxxxxx",
        authDomain: "fireblogs-b4b83.firebaseapp.com",
        projectId: "fireblogs-b4b83",
        storageBucket: "fireblogs-b4b83.appspot.com",
        messagingSenderId: "871674529444",
        appId: "1:871674529444:web:f7e038f6575ec2a4a04831"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    </script>   
```

## Reference

- [firebase](https://firebase.google.com)











