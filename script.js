let left = document.querySelector(".fa-chevron-left");

let right = document.querySelector(".fa-chevron-right");
let imgs = document.querySelectorAll(".img");
let maydon = document.querySelector(".imgs");

let son = 0;

// imgs[son].style.transform = `translateX(` + `${-500 * son}px)`;

right.onclick = function () {
  son >= imgs.length - 1 ? (son = -1) : son;
  maydon.style.transition = "2s all ease-in-out";
  son++;
  maydon.style.transform = `translateX(` + `${-500 * son}px)`;
};

left.onclick = function () {
  if (son == 0) son = imgs.length;

  son--;
  maydon.style.transform = `translateX(` + `${-500 * son}px)`;
};
