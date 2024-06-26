const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
console.log(hiddenElements);

/// PICTURE ANIMATION
window.onload = function () {
  document.querySelector(".bg").style.display = "block";
  document.querySelector(".bg").style.animationName = "animate";
  document.querySelector(".imgs").style.display = "none";
};
