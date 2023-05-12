import { useContext } from "react";
import { LoggedInContext } from "../App";
import "../css/votes.css";

const Votes = ({ post, voteClick }) => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  return (
    <div className="votes">
      <button
        className="upvote vote"
        disabled={!loggedIn}
        onClick={voteClick}
      ></button>
      <div className="vote-num">{post.upvotes - post.downvotes}</div>
      <button
        className="downvote vote"
        disabled={!loggedIn}
        onClick={voteClick}
      ></button>
    </div>
  );
};

export default Votes;
