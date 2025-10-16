import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";
import convert from "../grade/converter.jsx";

// Variable to store the actual grade of the current video
export let currentGrade = null;

// Calling for a random video
export async function getData(useGradeScale) {
  const querySnapshot = await getDocs(collection(db, "videos"));
  const docs = querySnapshot.docs;

  if (docs.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * docs.length);

  const randomDoc = docs[randomIndex];
  const data = randomDoc.data();

  if (useGradeScale) {
    currentGrade = convert(data.grade);
  } else {
    currentGrade = data.grade;
  }

  return data.youtubeLink;
}
