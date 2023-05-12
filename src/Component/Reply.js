import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../App";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseInit";
import "../css/reply.css";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

async function submitComment(e, post) {
  const comment = {
    body: e.target.form[0].value,
    downvotes: 0,
    id: null,
    postId: post.id,
    time: Date.now(),
    upvotes: 1,
    user: {
      id: null,
      username: getAuth().currentUser.displayName.split(" ").join(""),
    },
  };

  if (comment.body.trim()) {
    const docRef = doc(collection(db, "comments"));
    await setDoc(docRef, comment);
    const docSnap = await getDoc(docRef);
    await updateDoc(docRef, { id: docSnap.id });
    const postRef = doc(db, "posts", comment.postId);
    const postSnap = await getDoc(postRef);
    const origCommentIds = postSnap.data().commentIds;
    const updatedCommentIds = [...origCommentIds, docSnap.id];
    await updateDoc(postRef, { commentIds: updatedCommentIds });
    window.location.reload();
  }
}

const Reply = ({ post }) => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  return (
    <Form className="reply">
      <textarea placeholder="What are your thoughts?"></textarea>
      <button
        type="submit"
        disabled={!loggedIn}
        onClick={(e) => submitComment(e, post)}
      >
        Comment
      </button>
    </Form>
  );
};

export default Reply;
