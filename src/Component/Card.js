import "../css/card.css";
import Votes from "./Votes";
import CardHeader from "./CardHeader";
import PostPreview from "./PostPreview";
import CardFooter from "./CardFooter";
import { useContext } from "react";
import { LoggedInContext } from "../App";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

const Card = ({ post }) => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  async function voteClick(e) {
    e.preventDefault();
    if (loggedIn) {
      const postRef = doc(db, "posts", post.id);
      const classList = Array.from(e.target.classList);
      if (classList.includes("upvote")) {
        await updateDoc(postRef, { upvotes: post.upvotes + 1 });
      } else if (classList.includes("downvote")) {
        await updateDoc(postRef, { downvotes: post.downvotes + 1 });
      }
      window.location.reload();
    }
  }

  return (
    <div className="card">
      <Votes post={post} voteClick={voteClick} />
      <CardHeader post={post} />
      <div className="post-title">{post.title}</div>
      <PostPreview post={post} />
      <CardFooter post={post} />
    </div>
  );
};

export default Card;
