import "../css/card-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

const CardFooter = ({ post }) => {
  async function voteClick(e) {
    e.preventDefault();
    const postRef = doc(db, "posts", post.id);
    const classList = Array.from(e.target.classList);
    if (classList.includes("upvote")) {
      await updateDoc(postRef, { upvotes: post.upvotes + 1 });
    } else if (classList.includes("downvote")) {
      await updateDoc(postRef, { downvotes: post.downvotes + 1 });
    }
    window.location.reload();
  }

  return (
    <div className="card-footer">
      <Votes post={post} voteClick={voteClick} />
      <div className="footer-comments">
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">{`${post.commentIds.length} Comments`}</div>
      </div>
    </div>
  );
};

export default CardFooter;
