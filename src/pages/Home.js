import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Link to="/new-basket">Personalizar Cabaz</Link>
    </Fragment>
  );
};

export default Home;
