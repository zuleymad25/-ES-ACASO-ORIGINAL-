
const translations = {
  en: {
    main_title: "Is It Original?",
    compare_photos: "Compare your photos",
    upload_instruction: "Upload images of the product to get tips:",
    brand_filter: "Filter by brand",
    all_brands: "All brands",
    brand_examples: "Brand Examples",
    nike_tip: "Tip: Check that the logo is well aligned and the sole has defined texture.",
    adidas_tip: "Tip: The original logo is cleanly and symmetrically embroidered.",
    gucci_tip: "Tip: Original metal finishes are heavy and well-defined.",
    survey: "Had an experience with a fake product?",
    survey_link: "Click here to answer the survey"
  },
  fr: {
    main_title: "Est-ce Original ?",
    compare_photos: "Comparez vos photos",
    upload_instruction: "Téléchargez des images du produit pour obtenir des conseils :",
    brand_filter: "Filtrer par marque",
    all_brands: "Toutes les marques",
    brand_examples: "Exemples par marque",
    nike_tip: "Conseil : Vérifiez que le logo est bien aligné et que la semelle a une texture définie.",
    adidas_tip: "Conseil : Le logo original est brodé proprement et symétriquement.",
    gucci_tip: "Conseil : Les finitions métalliques originales sont lourdes et bien définies.",
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

document.getElementById("brandFilter").addEventListener("change", function () {
  const selected = this.value;
  document.querySelectorAll(".marca").forEach(m => {
    m.classList.remove("visible");
    if (selected === "all" || m.dataset.marca === selected) {
      m.classList.add("visible");
    }
  });
});
document.getElementById("brandFilter").dispatchEvent(new Event("change"));

document.getElementById("upload").addEventListener("change", function () {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  Array.from(this.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.maxWidth = "200px";
      img.style.margin = "10px";
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});
