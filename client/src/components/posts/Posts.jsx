import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </div>
  );
};

export default Posts;
