import "./App.css";
import ScrollUpBtn from "./components/back-to-top-btn/ScrollUpBtn";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <ScrollUpBtn />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
