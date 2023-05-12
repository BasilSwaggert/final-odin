import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseInit";

async function updateDocById(collection, docId) {
  const docRef = doc(db, collection, docId);
  await updateDoc(docRef, { id: docId });
}

async function getDocById(collectionName, id) {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  for (let document of querySnapshot.docs) {
    return document.data();
  }
}

export { updateDocById, getDocById };
