import "../css/new-post.css";
import { Form, redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { LoggedInContext } from "../App";
import { getAuth } from "firebase/auth";
import subreddits from "../data/subreddits";
import rdefault from "../data/icons/subreddits/rdefault.png";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseInit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const id = await SubmitPost(data);
  return redirect(`/${id}`);
}

async function SubmitPost(postdata) {
  let subreddit = null;
  let subredditName = null;
  if (postdata.subreddit.slice(0, 2) === "r/")
    subredditName = postdata.subreddit.slice(2);
  else subredditName = postdata.subreddit;

  if (subreddits[subredditName]) subreddit = subreddits[subredditName];
  else subreddit = { icon: rdefault, name: subredditName };

  const post = {
    commentIds: [],
    downvotes: 0,
    id: null,
    img: null,
    subreddit: subreddit,
    text: null,
    time: Date.now(),
    title: postdata.title,
    upvotes: 1,
    user: getAuth().currentUser.displayName.split(" ").join(""),
  };

  if (postdata.text) post.text = postdata.text;

  const postRef = doc(collection(db, "posts"));
  await setDoc(postRef, post);
  const snapshot = await getDoc(postRef);
  if (postdata.img) {
    const extension = postdata.img.type.split("/")[1];
    const filepath = `images/${snapshot.id}.${extension}`;
    const imageRef = ref(storage, filepath);
    await uploadBytes(imageRef, postdata.img);
    await getDownloadURL(imageRef).then((url) => (post.img = url));
  }
  await updateDoc(postRef, { id: snapshot.id, img: post.img });
  return snapshot.id;
}

const NewPost = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [checked, setChecked] = useState(false);
  const [uploading, setUploading] = useState(false);

  function handleContentType(e) {
    setChecked(e.target.checked);
  }

  return (
    <div id="new-post-container">
      <Form method="post" id="new-post" encType="multipart/form-data">
        <label>
          Title
          <input type="text" name="title" autoFocus></input>
        </label>
        <label>
          Subreddit
          <input type="text" name="subreddit"></input>
        </label>
        <div id="choose-content">
          <span>Add Text</span>
          <label className="switch">
            <input type="checkbox" onClick={handleContentType}></input>
            <span className="slider"></span>
          </label>
          <span>Upload Image</span>
        </div>
        {!checked && <textarea name="text"></textarea>}
        {checked && (
          <input type="file" name="img" accept="image/png, image/jpeg"></input>
        )}
        <button
          type="submit"
          id="submit-post-btn"
          disabled={!loggedIn}
          onClick={() => setUploading(true)}
        >
          Submit
        </button>
        {uploading && <div>Uploading...</div>}
      </Form>
    </div>
  );
};

export default NewPost;
export { action };
