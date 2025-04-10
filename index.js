"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.querySelector(".nav-button");
  const btnClose = document.querySelector(".close-nav");
  const nav = document.querySelector("nav");

  const tabBtn = document.querySelectorAll(".tab-button");
  const tab = document.querySelectorAll(".tab-content");

  const showModal = document.querySelector(".show-modal");
  const joinUsModal = document.querySelector(".joinus-modal");
  const modaClose = document.querySelector(".modal-close");

  const btnSendMessage = document.querySelector("#btnSend");
  const inputName = document.querySelector("#input-uname");
  const guestMess = document.querySelector("#mess");

  btnOpen.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
    document.body.style.overflow = "hidden";
  });
  btnClose.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
    document.body.style.overflow = "auto";
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

  showModal.addEventListener("click", function () {
    joinUsModal.classList.add("joinus-modal-active");
    document.body.style.overflow = "hidden";
    nav.classList.toggle("nav-open");
  });

  modaClose.addEventListener("click", function () {
    joinUsModal.classList.remove("joinus-modal-active");
    document.body.style.overflow = "auto";
  });

  btnSendMessage.addEventListener("click", function () {
    if (inputName.value) {
      alert(`Thank you ${inputName.value}

Your Message:
${guestMess.value}

Thank you for your message.

Regards,
Hector D. Raposas.`);
    } else {
      alert(
        `Dear guest,

Please enter your name so that I can recognize your pressence`
      );
    }
  });
});
