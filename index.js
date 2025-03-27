"use strict";

const btnOpen = document.querySelector(".nav-button");
const btnClose = document.querySelector(".close-nav");
const nav = document.querySelector("nav");

const tabBtn = document.querySelectorAll(".tab-button");
const tab = document.querySelectorAll(".tab-content");

btnOpen.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});
btnClose.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

tabBtn.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    tabBtn.forEach((btn) => btn.classList.remove("active"));
    buttons.classList.add("active");

    const tabContent = buttons.dataset.tab;

    const selectedTab = document.getElementById(tabContent);

    tab.forEach((tabs) => {
      tabs.classList.remove("active");
    });

    if (tabContent) {
      selectedTab.classList.add("active");
    }
  });
});
