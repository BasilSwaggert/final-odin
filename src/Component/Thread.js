import "../css/thread.css";
import Card from "./Card";
import Reply from "./Reply";
import posts from "../data/posts";
import Comment from "./Comment";
import { useEffect, useState, useContext } from "react";
import { db, addComment, readData } from "../firebaseInit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { getDocById } from "../utils/firestoreConnect";
import { LoggedInContext } from "../App";

const Thread = () => {
  const [comments, setComments] = useState([]);

  const [postId, setPostId] = useState(useParams().postId);
  const [post, setPost] = useState(null);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    const container = [];
    const commentsRef = collection(db, "comments");
    const q = query(commentsRef, where("postId", "==", postId));
    const result = getDocs(q);
    result.then((docs) => {
      docs.forEach((comment) => {
        container.push(comment.data());
      });
      container.sort((a, b) => b.time - a.time);
      setComments(container);
    });
  }, []);

  useEffect(() => {
    getDocById("posts", postId).then((doc) => {
      setPost(doc);
    });
  }, []);

  if (!post) return <div>Loading</div>;
  else
    return (
      <div className="thread">
        <div className="thread-container">
          <Card post={post} />
          <Reply post={post} />
          {comments &&
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
        </div>
      </div>
    );
};
export default Thread;
