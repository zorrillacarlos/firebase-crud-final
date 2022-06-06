import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzbjDEhjyn0g2_Xq9bMP-ohuJnb2qIqPg",
  authDomain: "crud-final-bootcamp.firebaseapp.com",
  projectId: "crud-final-bootcamp",
  storageBucket: "crud-final-bootcamp.appspot.com",
  messagingSenderId: "519187158197",
  appId: "1:519187158197:web:607db31b48f3ac94875afc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const ciudadesColRef = collection(db, "ciudades");

export default ciudadesColRef;