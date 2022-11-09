// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTwNCrMghf431_al-_YzedtRwf2r1pMVo",
  authDomain: "assignment-11-4b082.firebaseapp.com",
  projectId: "assignment-11-4b082",
  storageBucket: "assignment-11-4b082.appspot.com",
  messagingSenderId: "452393346853",
  appId: "1:452393346853:web:e6d6d488000767b8941ccc"

  // apiKey:process.env.REACT_APP_NO_apiKey,
  // authDomain:process.env.REACT_APP_NO_authDomain,
  // projectId:process.env.REACT_APP_NO_projectId,
  // storageBucket:process.env.REACT_APP_NO_storageBucket,
  // messagingSenderId:process.env.REACT_APP_NO_messagingSenderId,
  // appId:process.env.REACT_APP_NO_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;