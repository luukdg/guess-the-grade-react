import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";
import { convertToFont, convertToVSale } from "../functions/gradeConverter.jsx";

// Variable to store the actual grade of the current video
export let currentGrade = null;

// Calling for a random video
export async function getData(useGradeScale) {
  const querySnapshot = await getDocs(collection(db, "videos"));
  const docs = querySnapshot.docs;

  if (docs.length === 0) return null;

  // Pick random video
  const randomIndex = Math.floor(Math.random() * docs.length);

  const randomDoc = docs[randomIndex];
  const data = randomDoc.data();

  const ticketId = randomDoc.id;

  // convert the ACTUAL grade based on useGradeScale
  if (!useGradeScale) {
    currentGrade = convertToFont(data.numericGrade);
  } else {
    currentGrade = convertToVSale(data.numericGrade);
  }

  return { youtubeLink: data.youtubeLink, ticketId: ticketId };
}
