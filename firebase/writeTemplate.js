import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

try {
  for (let i = 0; i < 10; i++) {
    const docRef = await addDoc(collection(db, "outdoor"), {
      grade: "",
      lastShowDate: null,
      youtubeLink: "",
      hasBeenShown: false,
      timesShown: 0,
      numericGrade: null,
      guesses: {
        "48-59": 0,
        "60-63": 0,
        "64-67": 0,
        "68-71": 0,
        "72-75": 0,
        "76-79": 0,
        "80-83": 0,
      },
    });
    console.log("Document written with ID: ", docRef.id);
  }
} catch (e) {
  console.error("Error adding document: ", e);
}
