const demoButton = document.querySelector("#demoButton");
const preview = document.querySelector(".product-preview");
const tabs = document.querySelectorAll(".tabs button");

demoButton?.addEventListener("click", () => {
  preview?.scrollIntoView({ behavior: "smooth", block: "center" });
  preview?.classList.add("is-demoing");
  window.setTimeout(() => preview?.classList.remove("is-demoing"), 1400);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("selected"));
    tab.classList.add("selected");
  });
});
