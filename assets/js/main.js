window.onscroll = () => {
  const headerLine = document.querySelector(".header__line--inner");
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolledCalc = (winScroll / height) * 100;

  headerLine.style.width = `${Math.round(scrolledCalc)}%`;
};

const menuActions = {
  init: () => {
    menuActions.menuOpen();
    menuActions.menuClose();
  },
  menuOpen: () => {
    const navButton = document.querySelector(".header__button");
    const nav = document.querySelector(".nav");
    navButton.addEventListener("click", (e) => {
      console.log(e.target);
      nav.classList.add("nav--open");
    });
  },
  menuClose: () => {
    const nav = document.querySelector(".nav");
    nav.addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });
  },
};

menuActions.init();
