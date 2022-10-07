const ScrollUpBtn = () => {
  // get btn via id
  let scrollUpBtn = document.getElementById("scrollUpBtn");

  // when 20px scrolled down from top of page, show btn
  window.onscroll = () => {
    showOrHideBtn();
  };

  // show or hide btn if 20px from top of page
  const showOrHideBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };

  // scroll to top of page when btn's clicked
  const backToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <button onClick={backToTop} id="scrollUpBtn" title="Go to top">
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};
export default ScrollUpBtn;
