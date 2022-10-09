import "./index.css";

const ScrollUpBtn = () => {
  // get btn
  let btn;

  // when user scrolls down 20px from the top of document, show btn
  window.onscroll = function () {
    return scrollFunction();
  };

  function scrollFunction() {
    btn = document.getElementById("btn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  // when user clicks on btn, scroll to top of document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button onClick={topFunction} id="btn" title="Go to top">
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};
export default ScrollUpBtn;
