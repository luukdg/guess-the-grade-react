// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHa-piWiL4LO4cVALNgW029LMSn7XJ1fo",
  authDomain: "guess-the-grade-1a830.firebaseapp.com",
  projectId: "guess-the-grade-1a830",
  storageBucket: "guess-the-grade-1a830.firebasestorage.app",
  messagingSenderId: "164563794329",
  appId: "1:164563794329:web:a548e6e6802487d6643b08",
  measurementId: "G-69TWDLL5S3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
