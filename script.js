
const RUBIKA_LINK = "https://rubika.ir/novindoor24";

const waButton = document.getElementById("whatsapp-button");
const contactMessage = document.getElementById("contact-message");

function setupWhatsApp() {
  if (waButton) {
    waButton.href = RUBIKA_LINK;
    waButton.target = "_blank";
    waButton.rel = "noopener noreferrer";
    waButton.textContent = "سفارش از طریق روبیکا";
  }

  if (contactMessage) {
    contactMessage.textContent =
      "برای استعلام قیمت و ثبت سفارش، از طریق روبیکا پیام دهید.";
  }

  document.querySelectorAll(".quote-link").forEach((item) => {
    item.href = RUBIKA_LINK;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
  });
}

setupWhatsApp();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );
}
