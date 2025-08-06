
const translations = {
  en: {
    main_title: "Is It Original?",
    news: "News & Alerts",
    news_1: "🔍 Fake Nike shoes detected with misprinted tags (July 2025)",
    news_2: "⚠️ Fake Gucci items with plastic hardware found in unofficial stores",
    faq: "Frequently Asked Questions",
    faq_1_q: "What should I do if I bought something fake?",
    faq_1_a: "Gather evidence, contact the seller and report if possible.",
    faq_2_q: "What is the difference between replica and original?",
    faq_2_a: "Original products are made by the brand. Replicas are often illegal copies.",
    faq_3_q: "How can I tell if a store is trustworthy?",
    faq_3_a: "Buy only from official stores or authorized sellers.",
    testimonials: "Testimonials",
    testimonial_1: "“I thought my Adidas were real, but this page helped me see the difference. Thanks!” – Ana, Mexico City",
    testimonial_2: "“I uploaded a photo and realized the logo was wrong. I avoided a fake.” – Luis, Bogotá",
    official_stores: "Official Stores",
    survey: "Had an experience with a fake product?",
    survey_link: "Click here to answer the survey"
  },
  fr: {
    main_title: "Est-ce Original ?",
    news: "Nouveautés et Alertes",
    news_1: "🔍 Des fausses chaussures Nike détectées avec des étiquettes mal imprimées (juillet 2025)",
    news_2: "⚠️ Contrefaçons Gucci avec matériel plastique trouvées dans des boutiques non officielles",
    faq: "Questions Fréquentes",
    faq_1_q: "Que faire si j'ai acheté un faux produit ?",
    faq_1_a: "Rassemblez des preuves, contactez le vendeur et signalez si possible.",
    faq_2_q: "Quelle est la différence entre une réplique et un original ?",
    faq_2_a: "Les originaux sont fabriqués par la marque. Les répliques sont souvent illégales.",
    faq_3_q: "Comment savoir si une boutique est fiable ?",
    faq_3_a: "Achetez uniquement dans des boutiques officielles ou autorisées.",
    testimonials: "Témoignages",
    testimonial_1: "« Je pensais que mes Adidas étaient vraies, mais ce site m'a aidé à voir la différence. Merci ! » – Ana, Mexico",
    testimonial_2: "« J'ai téléchargé une photo et j'ai vu que le logo était faux. J'ai évité une arnaque. » – Luis, Bogotá",
    official_stores: "Boutiques Officielles",
    survey: "Vous avez eu une expérience avec un faux produit ?",
    survey_link: "Cliquez ici pour répondre au sondage"
  }
};

document.getElementById("languageSelector").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
