function mostrarImagen(input, previewId) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById(previewId).src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function filtrarMarcas() {
    const input = document.getElementById('busqueda').value.toLowerCase();
    const items = document.querySelectorAll('#listaCategorias li');

    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(input) ? 'inline-block' : 'none';
    });
}

let idioma = 'es';

function toggleLanguage() {
    idioma = idioma === 'es' ? 'en' : 'es';

    const textos = {
        es: {
            title: "¿Es Original?",
            subtitle: "Aprende a identificar productos originales comparándolos con falsificaciones.",
            imgCompareTitle: "Comparar Imágenes",
            guidesTitle: "Guías por Categoría",
            searchPlaceholder: "Buscar por marca..."
        },
        en: {
            title: "Is It Original?",
            subtitle: "Learn to identify original products by comparing them with fakes.",
            imgCompareTitle: "Compare Images",
            guidesTitle: "Guides by Category",
            searchPlaceholder: "Search by brand..."
        }
    };

    const t = textos[idioma];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('imgCompareTitle').textContent = t.imgCompareTitle;
    document.getElementById('guidesTitle').textContent = t.guidesTitle;
    document.getElementById('busqueda').placeholder = t.searchPlaceholder;
}
