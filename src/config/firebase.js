import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO - Use Environment Variables for security
const firebaseConfig = {
    apiKey: "AIzaSyChRdhdDSBY9YKQtEgVSUEloTr5UC4k8I4",
    authDomain: "learn-mojo.firebaseapp.com",
    databaseURL: "https://learn-mojo-default-rtdb.firebaseio.com",
    projectId: "learn-mojo",
    storageBucket: "learn-mojo.firebasestorage.app",
    messagingSenderId: "303846860678",
    appId: "1:303846860678:web:8d9f18e62a3370a78cee07",
    measurementId: "G-G4HWSMBC31"
};

const app = initializeApp(firebaseConfig);

export const authInstance = getAuth(app)