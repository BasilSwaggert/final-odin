import "../css/post-preview.css";

const PostPreview = ({ post }) => {
  return (
    <div className="post-preview">
      {post.img && <img src={post.img} alt=""></img>}
      {post.text && <div className="text-preview">{post.text}</div>}
    </div>
  );
};

export default PostPreview;
