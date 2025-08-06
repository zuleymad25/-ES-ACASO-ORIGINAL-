
// Traducciones básicas para selector de idioma
const translations = {
  en: {
    "news": "News & Alerts",
    "faq": "Frequently Asked Questions",
    "testimonials": "Testimonials",
    "official_stores": "Official Stores",
    "survey": "Have you had an experience with a fake product?"
  },
  fr: {
    "news": "Nouveautés et Alertes",
    "faq": "Questions Fréquentes",
    "testimonials": "Témoignages",
    "official_stores": "Magasins Officiels",
    "survey": "Avez-vous eu une expérience avec un produit contrefait ?"
  },
  es: {
    "news": "Novedades y Alertas",
    "faq": "Preguntas Frecuentes",
    "testimonials": "Testimonios",
    "official_stores": "Tiendas Oficiales",
    "survey": "¿Tuviste una experiencia con un producto falso?"
  }
};

document.getElementById("languageSelector").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
