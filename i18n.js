
const translations = {
  en: {
    "titulo-principal": "Is It Even Original?",
    "descripcion-principal": "Your guide to identifying original vs fake products through texture, color, stitching and more.",
    "sube-foto": "Upload a photo to compare",
    "elige-marca": "Choose a brand",
    "elige-categoria": "Filter by category",
    "consejos-identificacion": "Tips to Identify Fakes",
    "testimonios": "User Testimonials",
    "preguntas-frecuentes": "Frequently Asked Questions",
    "explora-marcas": "Explore Brands",
    "alertas-recientes": "Recent Fake Alerts",
    "lista-tiendas-oficiales": "Official Brand Stores List",
    "comparador-imagenes": "Compare Two Images Side by Side",
    "subir": "Upload",
    "buscar": "Search",
    "idioma": "Language",
    "espanol": "Spanish",
    "ingles": "English",
    "encuesta": "Survey",
    "responder-encuesta": "Answer the survey here",
    "marca-nike": "Nike",
    "marca-adidas": "Adidas",
    "marca-gucci": "Gucci",
    "marca-chanel": "Chanel",
    "marca-lv": "Louis Vuitton",
    "consejo-costuras": "Check if the stitching is uneven or poorly aligned.",
    "consejo-logo": "Look for minor logo inaccuracies.",
    "consejo-textura": "Feel the texture: authentic products have premium quality.",
    "faq-envios": "Do you ship internationally?",
    "faq-garantia": "Is there any authenticity guarantee?",
    "testimonio-1": "I almost got scammed, but this site saved me!",
    "testimonio-2": "Thanks to this page, I found out my bag was fake!",
    "alerta-zapatillas": "Fake sneakers of this model are circulating heavily.",
    "alerta-reloj": "Counterfeit watches spotted online at low prices.",
    "oficial-nike": "Go to Nike's official page",
    "oficial-adidas": "Go to Adidas' official page",
    "oficial-gucci": "Go to Gucci's official page"
  }
};

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
