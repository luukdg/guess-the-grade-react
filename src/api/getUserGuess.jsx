import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

export function getUserGuess(firebaseId) {
  const [averageGuess, setAverageGuess] = useState(null);

  useEffect(() => {
    const videoRef = doc(db, "videos", firebaseId);

    const unsubscribe = onSnapshot(videoRef, (docSnap) => {
      if (docSnap.exists()) {
        setAverageGuess(docSnap.data().guesses);
      }
    });

    return () => unsubscribe();
  }, [firebaseId]);

  return averageGuess;
}
