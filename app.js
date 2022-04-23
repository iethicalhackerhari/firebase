import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword , signOut ,signInWithEmailAndPassword  } from "firebase/auth";

const signUpForm = document.getElementById('signup-form')
const btnSubmit = document.getElementById('btn-submit')
const btnSignOut = document.getElementById('sign-out')
const userDiv = document.getElementById('user')
const btnSignIn = document.getElementById('sign-in')

const firebaseConfig = {
  apiKey: "AIzaSyClWu4KrSAHyhXocu5d-sqbtKYwY-yJgWk",
  authDomain: "test-be5e1.firebaseapp.com",
  projectId: "test-be5e1",
  storageBucket: "test-be5e1.appspot.com",
  messagingSenderId: "258816210773",
  appId: "1:258816210773:web:7886fcf31f1ab06588e1dc",
  measurementId: "G-2CMKHY9BPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
function signup(email,pass) {
    createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}

function signout(){
    signOut(auth).then((response) => {
        // Sign-out successful.
        console.log('signout success', response);
      }).catch((error) => {
        // An error happened.
        console.log('signout failed');
      });
}

function signin(email,pass) {
  console.log(email,pass);
    signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}






btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault()
  const email=signUpForm['email'].value
  const pass=signUpForm['password'].value
  signup(email,pass)
  
})
btnSignOut.addEventListener('click',(e)=>{
 signout()
})
btnSignIn.addEventListener('click',(e)=>{
  const email=signUpForm['email'].value
  const pass=signUpForm['password'].value
  signin(email,pass)
})