import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

try {
  for (let i = 0; i < 50; i++) {
    const docRef = await addDoc(collection(db, "videos"), {
      grade: "",
      lastShowDate: null,
      youtubeLink: "",
      hasBeenShown: false,
      timesShown: 0,
    });
    console.log("Document written with ID: ", docRef.id);
  }
} catch (e) {
  console.error("Error adding document: ", e);
}
