import "../css/home.css";
import Sorter from "./Sorter";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LoggedInContext } from "../App";
import { addPost, readData } from "../firebaseInit";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  function sortByNew() {
    const newPosts = posts.slice();
    newPosts.sort((a, b) => b.time - a.time);
    setPosts(newPosts);
  }

  function sortByTop() {
    const topPosts = posts.slice();
    topPosts.sort((a, b) => {
      const aVotes = a.upvotes - a.downvotes;
      const bVotes = b.upvotes - b.downvotes;
      return bVotes - aVotes;
    });
    setPosts(topPosts);
  }

  function sortByHot() {
    const hotPosts = posts.slice();
    hotPosts.sort((a, b) => 0.5 - Math.random());
    setPosts(hotPosts);
  }

  useEffect(() => {
    const data = readData("posts");
    data.then((res) => {
      // Sorts posts by highest vote count
      res.sort((a, b) => {
        const aVotes = a.upvotes - a.downvotes;
        const bVotes = b.upvotes - b.downvotes;
        return bVotes - aVotes;
      });
      setPosts(res);
    });
  }, []);

  return (
    <div id="home">
      <div id="home-container">
        <div className="space-between pb10">
          <div className="med" id="home-header">
            Popular posts
          </div>
          {loggedIn && (
            <Link to="/newpost">
              <button id="new-post-btn">New Post</button>
            </Link>
          )}
        </div>
        <Sorter
          sortByNew={sortByNew}
          sortByTop={sortByTop}
          sortByHot={sortByHot}
        />
        {posts.map((post) => {
          return (
            <Link to={`/${post.id}`} key={post.id}>
              <Card key={post.id} post={post} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
