const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry, entry.classList);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
console.log(hiddenElements);

window.onload = function () {
  document.querySelector(".bg").style.display = "block";
  document.querySelector(".bg").style.animationName = "animate";
  document.querySelector(".imgs").style.display = "none";
};

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicateItem = item.cloneNode(true);
      console.log(duplicateItem);
      duplicateItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicateItem);
    });
  });
}
