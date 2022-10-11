import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCW12QwbTYI_T8hQKclmBtjX7y4BwEv4GY",
    authDomain: "project-bc2bf.firebaseapp.com",
    projectId: "project-bc2bf",
    storageBucket: "project-bc2bf.appspot.com",
    messagingSenderId: "487832323964",
    appId: "1:487832323964:web:bd3b9deb1962b7dc8986f9",
    measurementId: "G-CWXS12QJZ4"
  };

  const app= initializeApp(firebaseConfig);
 export const db=getFirestore(app);
