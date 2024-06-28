
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfscEBtg54NN2Vx7VQcbqSDPWNPOtB_Uw",
  authDomain: "baseproyectoreact.firebaseapp.com",
  projectId: "baseproyectoreact",
  storageBucket: "baseproyectoreact.appspot.com",
  messagingSenderId: "121592995680",
  appId: "1:121592995680:web:480d86b3000985870d8805"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)