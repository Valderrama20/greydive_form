// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOLJS9vw4jldVlsPDPYbjDNPS99SnX4S0",
  authDomain: "greydive-form.firebaseapp.com",
  projectId: "greydive-form",
  storageBucket: "greydive-form.appspot.com",
  messagingSenderId: "389362881865",
  appId: "1:389362881865:web:9eb475b7624ffb84d63698"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app