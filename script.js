var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const index_currentSlide = this.realIndex;

      const pageIndex = document.getElementById("page");
      if (index_currentSlide !== undefined) {
        pageIndex.innerHTML = `${index_currentSlide + 1}/12`;
      }
    },
  },
  //   hashNavigation: true,
});

var newSwiper = new Swiper(".newSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

function navigateTo(index) {
  menu.classList.remove("active");
  swiper.slideTo(index, 1000, false);
}

function playPause(num) {
  const video1 = document.getElementById(`video${num}`);
  const video1Stopped = document.getElementById(`video${num}Stopped`);
  if (video1.paused) {
    video1.play();
    video1Stopped.classList.add("playing");
  } else {
    video1.pause();
    video1Stopped.classList.remove("playing");
  }
}

var val = 1;

function imageActive(num) {
  const image = document.getElementById(`image${num}`);
  image.classList.add("active");
  const data = document.getElementById(`data${num}`);
  data.classList.add("active");
  activeClassRemove();
  val = num;
}

function activeClassRemove() {
  const prevImage = document.getElementById(`image${val}`);
  prevImage.classList.remove("active");
  const data = document.getElementById(`data${val}`);
  data.classList.remove("active");
}

function tabClicked(num) {
  const one = document.getElementById(`one`);
  const two = document.getElementById(`two`);
  const first = document.getElementById(`first`);
  const second = document.getElementById(`second`);

  if (num === 1) {
    one.classList.add("active");
    first.classList.add("active");
    two.classList.remove("active");
    second.classList.remove("active");
  } else {
    one.classList.remove("active");
    first.classList.remove("active");
    two.classList.add("active");
    second.classList.add("active");
  }
}
