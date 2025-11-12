import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

async function numericGrade() {
  try {
    const querySnapshot = await getDocs(collection(db, "outdoor"));

    for (const docSnap of querySnapshot.docs) {
      // Update Firestore document with the new field
      await updateDoc(docSnap.ref, {
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
    }

    console.log("🎉 All videos updated with guesses field!");
  } catch (e) {
    console.error("Error updating documents: ", e);
  }
}

numericGrade();
