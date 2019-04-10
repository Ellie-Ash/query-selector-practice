console.log("Hello main.js");

const sectionEl = document.querySelector(".article__header");
console.log("article header", sectionEl);

const headerEl = document.querySelector(".article__header").textContent = "Welcome to Ellie's blog";
console.log("changed", headerEl);

const allHeaderEl = document.querySelectorAll(".article__header");
console.log("important change", allHeaderEl);

allHeaderEl[0].classList.remove("article__header");
allHeaderEl[0].classList.add("article__header__important");
console.log("change worked", allHeaderEl);

allHeaderEl[1].classList.remove("article__header");
allHeaderEl[1].classList.add("article__header__important");
console.log("change worked two", allHeaderEl);

const dashedEl = document.querySelector(".dashed");
console.log("selecting dashed", dashedEl);

dashedEl.classList.remove("dashed");

const footerColorEl = document.querySelector(".article__footer");
console.log("changing footer color", footerColorEl);

footerColorEl.classList.add("goldenrod");



