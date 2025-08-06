
const translations = {
  en: {
    "titulo": "Is It Original?",
    "consejos": "Tips to Identify Fakes",
    "preguntas_frecuentes": "Frequently Asked Questions",
    "testimonios": "User Testimonials",
    "explora_marcas": "Explore Brands",
    "alertas": "Latest Fake Alerts",
    "tiendas": "Official Stores by Brand",
    "sube_fotos": "Upload Photos to Compare",
    "escribe_aqui": "Write here...",
    "enviar": "Submit"
  },
  fr: {
    "titulo": "Est-ce Original ?",
    "consejos": "Conseils pour Identifier les Contrefaçons",
    "preguntas_frecuentes": "Questions Fréquemment Posées",
    "testimonios": "Témoignages d'utilisateurs",
    "explora_marcas": "Explorer les Marques",
    "alertas": "Dernières Alertes de Contrefaçons",
    "tiendas": "Boutiques Officielles par Marque",
    "sube_fotos": "Télécharger des Photos pour Comparer",
    "escribe_aqui": "Écris ici...",
    "enviar": "Envoyer"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
