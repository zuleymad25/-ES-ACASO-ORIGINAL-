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

let idioma = 'es';

function toggleLanguage() {
    idioma = idioma === 'es' ? 'en' : 'es';

    const textos = {
        es: {
            title: "¿Es Acaso Original?",
            subtitle: "Aprende a identificar productos originales comparándolos con falsificaciones.",
            imgCompareTitle: "Comparar Imágenes"
        },
        en: {
            title: "Is It Original?",
            subtitle: "Learn to identify original products by comparing them with fakes.",
            imgCompareTitle: "Compare Images"
        }
    };

    const t = textos[idioma];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('imgCompareTitle').textContent = t.imgCompareTitle;
}
