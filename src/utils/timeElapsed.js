const timeElapsed = (start) => {
  let elapsed = (Date.now() - start) / 1000;
  if (elapsed < 60) {
    if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} seconds ago`;
    else return "1 second ago";
  }
  elapsed = elapsed / 60;
  if (elapsed < 60) {
    if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} minutes ago`;
    else return "1 minute ago";
  }
  elapsed = elapsed / 60;
  if (elapsed < 24) {
    if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} hours ago`;
    else return "1 hour ago";
  }
  elapsed = elapsed / 24;
  if (elapsed < 30) {
    if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} days ago`;
    else return "1 day ago";
  }
  elapsed = elapsed / 30;
  if (elapsed < 12) {
    if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} months ago`;
    else return "1 month ago";
  }
  elapsed = elapsed / 12;
  if (Math.floor(elapsed) > 1) return `${Math.floor(elapsed)} years ago`;
  else return "1 year ago";
};

// Random time within the last 65 minutes
timeElapsed(Date.now() - Math.random() * 3960000);

export default timeElapsed;
