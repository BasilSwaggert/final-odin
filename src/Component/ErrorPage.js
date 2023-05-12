import { useRouteError, Link } from "react-router-dom";
import errorImg from "../assets/img/error.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <img src={errorImg} alt="" height={100}></img>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <p>Return to Home</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
