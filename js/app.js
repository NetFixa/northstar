const greetings = [
    "Bom dia ☀️",
    "Boa tarde 🌤️",
    "Boa noite 🌙"
];

const quotes = [
    "Pequenas escolhas positivas podem mudar completamente o teu dia.",
    "A curiosidade é o início de todas as grandes descobertas.",
    "Cada clique pode levar-te a aprender algo novo.",
    "Explorar é uma forma de crescer.",
    "Há sempre uma direção melhor."
];

const discoveries = [
    "🌍 A Islândia não tem mosquitos.",
    "🚀 A luz do Sol demora cerca de 8 minutos a chegar à Terra.",
    "🐙 Os polvos têm três corações.",
    "🌲 A floresta amazónica produz enormes quantidades de oxigénio e influencia o clima mundial.",
    "🛰️ Existem milhares de satélites em órbita da Terra."
];

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){
    greeting = greetings[0];
}
else if(hour < 19){
    greeting = greetings[1];
}
else{
    greeting = greetings[2];
}

document.querySelector(".hero h2").textContent = greeting;

document.querySelector(".subtitle").textContent =
quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("daily-text").textContent =
discoveries[Math.floor(Math.random()*discoveries.length)];
const surpriseSites = [
    {
        name: "Radio Garden",
        url: "https://radio.garden"
    },
    {
        name: "NASA Astronomy Picture of the Day",
        url: "https://apod.nasa.gov/apod/astropix.html"
    },
    {
        name: "GeoGuessr",
        url: "https://www.geoguessr.com/free"
    },
    {
        name: "Google Arts & Culture",
        url: "https://artsandculture.google.com"
    },
    {
        name: "Wikipedia - Artigo Aleatório",
        url: "https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria"
    }
];

const surpriseButton = document.getElementById("surprise-btn");

surpriseButton.addEventListener("click", () => {

    const site = surpriseSites[
        Math.floor(Math.random() * surpriseSites.length)
    ];

    const confirmOpen = confirm(
        `🌟 Hoje a tua descoberta é:\n\n${site.name}\n\nQueres abrir este site?`
    );

    if(confirmOpen){
        window.open(site.url, "_blank");
    }

});
