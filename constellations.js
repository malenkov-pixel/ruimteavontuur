const savedLanguage = localStorage.getItem("siteLanguage") || "ru";

window.addEventListener("DOMContentLoaded", () => {
    if (typeof changeLanguage === "function") {
        changeLanguage(savedLanguage);
    }
});