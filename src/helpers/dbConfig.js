import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyD1rXBLeyWbVIaWKqARUQHJ3gs6wmgKO1c",
    authDomain: "portfolio-messages-7fb83.firebaseapp.com",
    projectId: "portfolio-messages-7fb83",
    storageBucket: "portfolio-messages-7fb83.appspot.com",
    messagingSenderId: "610233781180",
    appId: "1:610233781180:web:af560b5328aacf5895b9b9",
    measurementId: "G-FJBCY31YEB",
});

const db = getFirestore(firebaseApp);

export { db };