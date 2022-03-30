import firebase from 'firebase/app' 

const firebaseConfig = {
    apiKey: "AIzaSyBR5XBAKzQEq1U6tD9xijHB8fNHud0SY8U",
    authDomain: "restau-1712e.firebaseapp.com",
    projectId: "restau-1712e",
    storageBucket: "restau-1712e.appspot.com",
    messagingSenderId: "663658932790",
    appId: "1:663658932790:web:df66492f90726f2f438697"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)