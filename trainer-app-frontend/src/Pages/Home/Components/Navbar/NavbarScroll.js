export function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;
  let isScrollingDown = false;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      if (!isScrollingDown) {
        navbar.style.top = "-100px"; // Adjust to match the height of the navbar
        isScrollingDown = true;
      }
    } else {
      // Scrolling up
      if (isScrollingDown) {
        navbar.style.top = "0";
        isScrollingDown = false;
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
