import "../css/card-header.css";
import timeElapsed from "../utils/timeElapsed";

const CardHeader = ({ post }) => {
  return (
    <div className="card-header">
      <img className="subreddit-icon" src={post.subreddit.icon} alt=""></img>
      <div className="subreddit-name">{`r/${post.subreddit.name}`}</div>
      <div className="post-info">{`Posted by u/${post.user} ${timeElapsed(
        post.time
      )}`}</div>
    </div>
  );
};

export default CardHeader;
