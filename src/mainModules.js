

function scrollFunc(){
    const scrollArrow = document.querySelector('.scroll-arrow');

    const halfOfViewport = window.innerHeight / 2;
  
    let scrollValue = window.scrollY;
  
    if (scrollValue > halfOfViewport) {
      scrollArrow.classList.add("show");
    } else {
      scrollArrow.classList.remove("show");
    }
}


function scrollToTop (){
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};


function currentDateUpdate(){
    const date = new Date();
    let year = date.getFullYear();

    const copyrightYearWrapper = document.querySelector('.copyright-year')

    copyrightYearWrapper.innerHTML = year;
}

export {scrollFunc, scrollToTop, currentDateUpdate }