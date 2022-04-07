const WebCifarIcon = document.querySelector(".btn");
const WebCifarEl = document.querySelector(".banner-container");
const close = WebCifarEl.querySelector(".close");


WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

