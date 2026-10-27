// شماره واتساپ را با کد کشور وارد کنید؛ نمونه ایران: 989381946958
// فقط ارقام وارد شود، بدون +، فاصله یا صفر ابتدای شماره.
const WHATSAPP_NUMBER = "989381946958"; // شماره واتساپ نوین در

const waButton = document.getElementById("whatsapp-button");
const contactMessage = document.getElementById("contact-message");

function makeWhatsAppLink(message = "سلام، برای اطلاع از قیمت و سفارش محصولات نوین در پیام می‌دهم.") {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function setupWhatsApp() {
  const link = makeWhatsAppLink();
  if (link) {
    waButton.href = link;
    waButton.target = "_blank";
    waButton.rel = "noopener noreferrer";
    waButton.textContent = "پیام در واتساپ";
    contactMessage.textContent = "برای استعلام قیمت روز و ثبت سفارش، از طریق واتساپ پیام دهید.";
    document.querySelectorAll(".quote-link").forEach((item) => {
      item.href = makeWhatsAppLink("سلام، لطفاً قیمت و اطلاعات محصول «" + item.dataset.product + "» را برایم ارسال کنید.");
      item.target = "_blank";
      item.rel = "noopener noreferrer";
    });
  } else {
    waButton.href = "#contact";
    waButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("برای فعال‌سازی واتساپ، فایل script.js را باز کنید و شماره را در WHATSAPP_NUMBER وارد کنید. نمونه: 989381946958");
    });
    document.querySelectorAll(".quote-link").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        alert("پس از ثبت شماره واتساپ در فایل script.js، دکمه‌های استعلام قیمت فعال می‌شوند.");
      });
    });
  }
}
setupWhatsApp();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
