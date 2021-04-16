// import "../node_modules/normalize.css";
// import "./styles/comon.css"
// import "./style.css";

window.onload  = function(){
    let scrolled;
    let timer;
  document.getElementById('top').onclick = function(){
  scrolled = window.pageYOffset;
    scrollToTop();
  }
  function scrollToTop(){
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 200;
      timer = setTimeout(scrollToTop, 100);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
}

