// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNpr2a2IueYZtbldIlQj42gGLBvgfaZw",
  authDomain: "beesportwear-5e4ee.firebaseapp.com",
  projectId: "beesportwear-5e4ee",
  storageBucket: "beesportwear-5e4ee.appspot.com",
  messagingSenderId: "838636048163",
  appId: "1:838636048163:web:d126c65a009dc71b644696",
  measurementId: "G-3NQNQMN39C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
