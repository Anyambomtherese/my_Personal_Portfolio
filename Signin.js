import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJeb3F6ow-5CPbXAHX5aPB5ehfl506nRo",
  authDomain: "portfolio-76eab.firebaseapp.com",
  projectId: "portfolio-76eab",
  storageBucket: "portfolio-76eab.appspot.com",
  messagingSenderId: "520092624476",
  appId: "1:520092624476:web:8bf2d03ad83d7dd3ffe899",
  measurementId: "G-G08YNP2LR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// console.log(email)
const register = document.getElementById("submit")


register.addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value 
    const password = document.getElementById("password").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("success")
        // ...
        window.location.href = "index.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });


    


    })