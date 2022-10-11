import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    //make firebase account and copy/paste api key onto here
  };

  const app= initializeApp(firebaseConfig);
 export const db=getFirestore(app);
