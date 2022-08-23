import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOdRtQBx2cToXzJY1ydumef3WmuIB-UDk",
    authDomain: "abccorporativos-3b998.firebaseapp.com",
    projectId: "abccorporativos-3b998",
    storageBucket: "abccorporativos-3b998.appspot.com",
    messagingSenderId: "552454721852",
    appId: "1:552454721852:web:caa7983367303efa5d4e39",
    measurementId: "G-H1K4WH0HRM"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;