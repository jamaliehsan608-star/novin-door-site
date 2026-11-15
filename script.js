const RUBIKA_LINK = "https://rubika.ir/Ehsan_jm61";

const waButton = document.getElementById("whatsapp-button");
const contactMessage = document.getElementById("contact-message");

function setupWhatsApp() {
  if (waButton) {
    waButton.href = RUBIKA_LINK;
    waButton.target = "_blank";
    waButton.rel = "noopener noreferrer";
    waButton.textContent = "پیام خصوصی در روبیکا";
  }

  if (contactMessage) {
    contactMessage.textContent =
      "برای سفارش و استعلام قیمت، در روبیکا پیام خصوصی بدهید.";
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
