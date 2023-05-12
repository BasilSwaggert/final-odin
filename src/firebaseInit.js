// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJkyKBsADuqTmhoZcRXX_hXa-B7s74x44",
  authDomain: "rclone-523cd.firebaseapp.com",
  projectId: "rclone-523cd",
  storageBucket: "rclone-523cd.appspot.com",
  messagingSenderId: "129083764114",
  appId: "1:129083764114:web:717268f98962f6aa5da54b",
  measurementId: "G-GX36PWNSYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function addComment(comment) {
  await addDoc(collection(db, "comments"), comment);
}

async function addPost(post) {
  await addDoc(collection(db, "posts"), post);
}

async function readData(collectionName) {
  const docs = await getDocs(collection(db, collectionName));
  const data = [];
  docs.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

export { db, storage, addPost, addComment, readData };
