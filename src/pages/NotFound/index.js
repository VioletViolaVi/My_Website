import { Footer, NavBar } from "../../components/index";
import "./index.css";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <header className="page-not-found-title">
        <h1>Sorry, Page Not Found!😭</h1>
      </header>
      <Footer />
    </>
  );
};
export default NotFound;
