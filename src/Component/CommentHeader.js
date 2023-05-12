import "../css/comment-header.css";
import timeElapsed from "../utils/timeElapsed";
import av1 from "../data/icons/users/av1.png";
import av2 from "../data/icons/users/av2.png";
import av3 from "../data/icons/users/av3.png";
import av4 from "../data/icons/users/av4.png";
import av5 from "../data/icons/users/av5.png";
import av6 from "../data/icons/users/av6.png";
import av7 from "../data/icons/users/av7.png";
import av8 from "../data/icons/users/av8.png";
import { useState } from "react";

const avatars = [av1, av2, av3, av4, av5, av6, av7, av8];

const CommentHeader = ({ comment }) => {
  const [avatar, setAvatar] = useState(
    avatars[Math.floor(Math.random() * avatars.length)]
  );

  return (
    <div className="comment-header">
      <img className="user-icon" src={avatar} alt=""></img>
      <div className="user-name">{`u/${comment.user.username}`}</div>
      {/* <div className="comment-info">{`${timeElapsed(
        Math.floor(Date.now() - Math.random() * 3960000)
      )}`}</div> */}
      <div className="comment-info">{timeElapsed(comment.time)}</div>
    </div>
  );
};

export default CommentHeader;
