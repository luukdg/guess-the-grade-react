import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import convertGradeToScore from "./convertGradeToScore.js";

async function numericGrade() {
  try {
    const querySnapshot = await getDocs(collection(db, "outdoor"));

    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      const grade = data.grade;

      const numericValue = data.numericValue;
      if (numericValue !== null && numericValue !== undefined) {
        console.log("⏩ Skipped. Already has been converted.");
        continue;
      }

      const convertedGrade = convertGradeToScore(grade); // Convert grade to numeric value

      // Update Firestore document with the new field
      await updateDoc(docSnap.ref, {
        numericGrade: convertedGrade,
      });

      console.log(`✅ Updated ${docSnap.id}: ${grade} → ${convertedGrade}`);
    }

    console.log("🎉 All videos updated with numericGrade field!");
  } catch (e) {
    console.error("Error updating documents: ", e);
  }
}

numericGrade();
