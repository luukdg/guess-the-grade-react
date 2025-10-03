import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

// Calling for a random video
export async function getData() {
  const querySnapshot = await getDocs(collection(db, "videos"));
  const docs = querySnapshot.docs;

  if (docs.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * docs.length);

  console.log(randomIndex);
  const randomDoc = docs[randomIndex];
  const data = randomDoc.data();

  console.log("Random ID:", randomDoc.id);
  console.log("YoutubeLink:", data.youtubeLink);
  return data.youtubeLink;
}
