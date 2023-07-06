 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import{ getDatabase , push , set , ref } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 import{ getAuth , createUserWithEmailAndPassword } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDZuguFIGtqDjzZt3SZDsp8LJwqIFqA400",
   authDomain: "fmp-final-module-project.firebaseapp.com",
   projectId: "fmp-final-module-project",
   storageBucket: "fmp-final-module-project.appspot.com",
   messagingSenderId: "567168550995",
   appId: "1:567168550995:web:0dc3c91d064c7ac6e81ea6",
   measurementId: "G-KMLYXL9EQP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 var db = getDatabase()
const auth = getAuth()



window.submit = function() {
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var Email = document.getElementById('Email');
  var phone = document.getElementById('phone');
  var textaera = document.getElementById('textaera');

  var obj = {
    firstname: firstname.value,
    lastname: lastname.value,
    Email: Email.value,
    phone: phone.value,
    textaera: textaera.value
  };

  var userRef = push(ref(db, 'contact'));
  set(userRef, obj);

  console.log(obj);


  const email = Email.value;
  const password = "some_password";


  createUserWithEmailAndPassword(auth, email, password)

    .then(function(success) {
      const user = success.user;
      alert("User created successfully:", user);
    })

    .catch(function(error) {
      alert("Invalid Email:", error);
    });

 
  firstname.value = '';
  lastname.value = '';
  Email.value = '';
  phone.value = '';
  textaera.value = '';
};
