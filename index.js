let currentTime = new Date();
let hh = currentTime.getHours();
let mm = currentTime.getMinutes();
let ss = currentTime.getSeconds();

let clock = () => {
  let time = `${hh}:${mm}:${ss}`;
  ss += 1;
  if (ss === 60) {
    ss = 0;
    mm += 1;
  }
  if (mm === 60) {
    mm = 0;
    hh += 1;
  }
  if (hh === 13) {
    hh = 1;
  }
  document.querySelector(".hours").innerHTML = hh;
  document.querySelector(".minuts").innerHTML = mm;
  document.querySelector(".seconds").innerHTML = ss;
  setTimeout(() => {
    clock();
  }, 1000);
};
clock();
