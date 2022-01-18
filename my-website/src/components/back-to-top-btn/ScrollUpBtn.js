const ScrollUpBtn = () => {
  // get btn
  let scrollUpBtn = document.getElementById("scrollUpBtn");

  // when user scrolls down 20px from top of document, show btn
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  }

  // when user clicks btn, scroll to top of page
  function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <button
        onClick={topFunction}
        id="scrollUpBtn"
        title="Go to top"
        className="scroll-up-btn"
      >
        Top
      </button>
    </>
  );
};
export default ScrollUpBtn;
