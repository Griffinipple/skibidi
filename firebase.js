// firebase.js
var firebaseConfig = {
  apiKey: "AIzaSyANZ0SDhqoc62msSooQFs3SEb4XbC7gvk4",
  authDomain: "dev.1v1.lol",
  projectId: "dev1v1",
  storageBucket: "dev1v1.appspot.com",
  messagingSenderId: "90097883404",
  appId: "1:90097883404:android:0931a7bbf3e74f2b9a5129",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function initializeFireBase() {
  firebase.initializeApp(firebaseConfig);
}

function initializeFireBaseDev() {
  firebase.initializeApp(firebaseConfig);
}
