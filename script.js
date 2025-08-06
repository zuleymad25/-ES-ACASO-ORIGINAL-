
function toggleLanguage() {
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    const textos = {
        es: {
            t_title: "¿Es Acaso Original?",
            t_main_title: "¿Es Acaso Original?",
            t_subtitle: "Aprende a identificar productos originales comparándolos con falsificaciones.",
            t_compare_title: "Comparar Imágenes",
            t_tips: "Consejos para comparar:",
            t_filter: "Filtrar y Buscar",
            t_examples: "Ejemplos por Marca",
            t_share: "¿Te tocó un producto fake?",
            t_brand: "Marca:",
            t_desc: "Descripción / experiencia:",
            t_upload: "Subir foto (opcional):",
            t_submit: "Enviar",
            t_footer: "¿Es Acaso Original? © 2025 - Todos los derechos reservados."
        },
        en: {
            t_title: "Is It Original?",
            t_main_title: "Is It Original?",
            t_subtitle: "Learn to identify original products by comparing them with fakes.",
            t_compare_title: "Compare Images",
            t_tips: "Tips to Compare:",
            t_filter: "Filter and Search",
            t_examples: "Brand Examples",
            t_share: "Did you get a fake product?",
            t_brand: "Brand:",
            t_desc: "Description / experience:",
            t_upload: "Upload image (optional):",
            t_submit: "Submit",
            t_footer: "Is It Original? © 2025 - All rights reserved."
        }
    };

    const t = textos[lang];
    Object.keys(t).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[id];
    });
}

function loadImage(event, id) {
    const img = document.getElementById(id);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => img.src = e.target.result;
    if (file) reader.readAsDataURL(file);
}

function filtrarTarjetas() {
    const filtro = document.getElementById("filtroCategoria").value.toLowerCase();
    const texto = document.getElementById("searchInput").value.toLowerCase();
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(t => {
        const nombre = t.dataset.nombre.toLowerCase();
        const coincideTexto = nombre.includes(texto);
        const coincideCategoria = filtro === "todas" || t.classList.contains(filtro);
        t.style.display = (coincideTexto && coincideCategoria) ? "block" : "none";
    });
}
