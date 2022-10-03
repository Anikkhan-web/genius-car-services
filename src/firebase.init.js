// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFdiir_7YCh8skQH44DQFI2-sQePw3Ymc",
    authDomain: "genius-car-services-c44c7.firebaseapp.com",
    projectId: "genius-car-services-c44c7",
    storageBucket: "genius-car-services-c44c7.appspot.com",
    messagingSenderId: "836877174765",
    appId: "1:836877174765:web:76405c966919f766ee89e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;