const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
var main = document.querySelector("#main");
let interval;
document.querySelector("#start").addEventListener("click", function () {
  function changebgcolor() {
    main.style.backgroundColor = randomcolor();
  }
  if (interval == null) {
    interval = setInterval(changebgcolor, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", function () {
  function stopchangingcolor() {
    clearInterval(interval);
    interval = null;
  }
  stopchangingcolor();
});
