// Versículos
const versiculos = [
    "El amor es paciente, es bondadoso. - 1 Corintios 13:4",
    "Y sobre todo, revístanse de amor, que es el vínculo perfecto. - Colosenses 3:14",
    "Nosotros amamos porque él nos amó primero. - 1 Juan 4:19",
    "Hagan todo con amor. - 1 Corintios 16:14"
];

function cambiarVersiculo() {
    let index = Math.floor(Math.random() * versiculos.length);
    document.getElementById("versiculo-texto").innerText = versiculos[index];
}

// Frases
const frases = [
    "El amor no se mira con los ojos, sino con el alma. - William Shakespeare",
    "Donde hay amor, hay vida. - Mahatma Gandhi",
    "El amor verdadero no tiene final feliz, porque simplemente no tiene final.",
    "Ama sin medida, sin límites, sin condiciones, sin complejos, sin permiso, sin cura y sin miedo."
];

function cambiarFrase() {
    let index = Math.floor(Math.random() * frases.length);
    document.getElementById("frase-texto").innerText = frases[index];
}
