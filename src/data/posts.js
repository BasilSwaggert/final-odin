import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.webp";
import img3 from "./imgs/img3.webp";
import sub1 from "../assets/img/sub1.png";
import sub2 from "../assets/img/sub2.png";
import sub3 from "../assets/img/sub3.png";
import sub4 from "../assets/img/sub4.png";
import sub5 from "../assets/img/sub5.png";
import sub6 from "../assets/img/sub6.png";
import sub7 from "../assets/img/sub7.png";
import sub8 from "../assets/img/sub8.png";
import sub9 from "../assets/img/sub9.png";
import sub10 from "../assets/img/sub10.png";
import sub11 from "../assets/img/sub11.png";
import sub12 from "../assets/img/sub12.png";
import subreddits from "./subreddits";
import { addPost } from "../firebaseInit";

const subIcons = [
  sub1,
  sub2,
  sub3,
  sub4,
  sub5,
  sub6,
  sub7,
  sub8,
  sub9,
  sub10,
  sub11,
  sub12,
];

const posts = [
  {
    user: "King-Camyen",
    time: 1674210418000,
    subreddit: subreddits.pics,
    title: "A Picture from the James Webb Space Telescope",
    img: img1,
    text: "",
    upvotes: 4186,
    downvotes: 62,
    comments: 59,
    commentIds: [],
  },
  {
    user: "Kssio_Aug",
    time: 1673783476000,
    subreddit: subreddits.books,
    title: "Finished The Dark Tower series! It was an incredible journey!",
    img: null,
    text: `I just finished The Dark Tower series! It was a long journey, but for sure a remarkable one!

    Contrary to many other readers though, I really liked the last 3 books. Also loved the ending! Roland's quest was hard and sad, and it seems to focus on obsession and redemption, and it was amazing!
    
    It started a bit slow to me, and at some point I almost gave up. There are some mannerisms in King's writing style and some references to american pop culture that I didn't really like, and sometimes felt a bit cringe, but maybe it's because I'm not too familiar with said references.
    
    But I'm glad I decided to stick to it, because after a while I was hooked to the tale and the characters, and, by the end, it was like a sad and hard farewell! Not many stories touches me this way now that I'm getting old.
    
    The tale, the journey, the characters, they were amazing! His characters feel very human with the right amount of complexity. It made me connect to them and understand them, even if they're so different than me!
    
    If you ever had the interest to read the series but for some reason decided to hold back, I urge you to do it! If you're looking for a new series to read, give it a try! I think you will not regret!
    
    Never read any other Stephen King's books, but after reading The Dark Tower I am anxious to read many of his other books. Might read Pet Sematary or The Stand next!`,
    upvotes: 4097,
    downvotes: 556,
    comments: 438,
    commentIds: [],
  },
  {
    user: "miguelllobo",
    time: 1650023476000,
    subreddit: subreddits.art,
    title: "'Kokuro', Me, 3D, 2022",
    img: img2,
    text: "",
    upvotes: 1542,
    downvotes: 103,
    comments: 72,
    commentIds: [],
  },
  {
    user: "TheSensibleTurtle",
    time: 1672575943000,
    subreddit: subreddits.askreddit,
    title: "What's the best piece of advice you're ever been given?",
    img: null,
    text: "",
    upvotes: 867,
    downvotes: 245,
    comments: 196,
    commentIds: [],
  },
  {
    user: "llzzies",
    time: 1658321622000,
    subreddit: subreddits.itap,
    title: "ITAP of a baby turtle at sunset",
    img: img3,
    text: "",
    upvotes: 512,
    downvotes: 43,
    comments: 21,
    commentIds: [],
  },
];

// posts.forEach((post) => addPost(post));

export default posts;
