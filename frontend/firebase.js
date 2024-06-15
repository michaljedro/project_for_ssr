// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwVznZo3PaStiENeJgrVNluaUyCU5I60",
  authDomain: "projectssr-56dd3.firebaseapp.com",
  projectId: "projectssr-56dd3",
  storageBucket: "projectssr-56dd3.appspot.com",
  messagingSenderId: "293462686126",
  appId: "1:293462686126:web:15b21d6c42a6488040f03f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);