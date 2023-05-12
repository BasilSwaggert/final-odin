import "../css/comment.css";
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <CommentHeader comment={comment} />
      <div className="comment-body">{comment.body}</div>
      <CommentFooter comment={comment} />
    </div>
  );
};

export default Comment;
