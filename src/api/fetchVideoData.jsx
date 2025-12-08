import { collection, getDocs, where, query, limit } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"
import { convertToFont, convertToVSale } from "../functions/gradeConverter.jsx"

export async function getData(useGradeScale, videoType) {
  const videosRef = collection(db, "videos")
  const r = Math.random()
  let q

  if (videoType === "indoor") {
    q = query(
      videosRef,
      where("location", "==", "indoor"),
      where("rand", ">=", r),
      limit(10),
    )
  } else if (videoType === "outdoor") {
    q = query(
      videosRef,
      where("location", "==", "outdoor"),
      where("rand", ">=", r),
      limit(10),
    )
  } else {
    q = query(videosRef, where("rand", ">=", r), limit(10))
  }

  let snap = await getDocs(q)

  if (snap.empty || snap.docs.length < 10) {
    if (videoType === "indoor") {
      q = query(
        videosRef,
        where("location", "==", "indoor"),
        where("rand", "<", r),
        limit(10),
      )
    } else if (videoType === "outdoor") {
      q = query(
        videosRef,
        where("location", "==", "outdoor"),
        where("rand", "<", r),
        limit(10),
      )
    } else {
      q = query(videosRef, where("rand", "<", r), limit(10))
    }

    const fallbackSnap = await getDocs(q)

    snap = { docs: [...snap.docs, ...fallbackSnap.docs].slice(0, 10) }
  }

  if (snap.docs.length === 0) return []

  const videos = []
  for (let i = 0; i < snap.docs.length; i++) {
    const data = snap.docs[i].data()
    const grade = data.numericGrade
    const convertedGrade =
      useGradeScale === "font-scale"
        ? convertToFont(grade)
        : convertToVSale(grade)

    videos.push({
      youtubeLink: data.youtubeLink,
      grade: convertedGrade,
      ticketId: snap.docs[i].id,
    })
  }

  console.log(videos)
  return videos
}
