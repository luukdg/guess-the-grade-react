import { convertToNumericGrade } from "@/functions/gradeConverter.jsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

export async function uploadNewVideo(data) {
  const youtubeLink = data.youtubeLink;
  const grade = data.grade;
  const location = data.location;
  const numericGrade = convertToNumericGrade(grade);
  const today = new Date();

  // splitting the youtube link
  const url = new URL(youtubeLink);

  let videoId = null;

  if (url.hostname.includes("youtube.com")) {
    if (url.pathname.startsWith("/shorts/")) {
      videoId = url.pathname.split("/").pop(); // Shorts format
    } else {
      videoId = url.searchParams.get("v"); // Normal watch?v= format
    }
  } else if (url.hostname === "youtu.be") {
    videoId = url.pathname.slice(1); // Handles youtu.be/xxxxxx
  }

  try {
    const docRef = await addDoc(collection(db, "new-videos"), {
      grade: grade,
      lastShowDate: null,
      youtubeLink: videoId,
      location: location,
      hasBeenShown: false,
      timesShown: 0,
      numericGrade: numericGrade,
      guesses: {
        "48-59": 0,
        "60-63": 0,
        "64-67": 0,
        "68-71": 0,
        "72-75": 0,
        "76-79": 0,
        "80-83": 0,
      },
      timeUploaded: today,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding video ", e);
  }
}
