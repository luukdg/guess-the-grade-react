import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

async function countVideosByGrade() {
  try {
    const querySnapshot = await getDocs(collection(db, "videos"));
    const gradeCounts = {};

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const grade = data.grade || "Unknown";
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    });

    console.log("Video counts by grade:", gradeCounts);
    return gradeCounts;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

countVideosByGrade();
