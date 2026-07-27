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

const modal = document.getElementById("discovery-modal");
const closeModal = document.getElementById("close-modal");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalTime = document.getElementById("modal-time");

let selectedSite = null;

function showRandomSite(){

    selectedSite =
    surpriseSites[Math.floor(Math.random()*surpriseSites.length)];

    modalTitle.textContent = selectedSite.name;
    modalDescription.textContent = selectedSite.description;
    modalCategory.textContent = selectedSite.category;
    modalTime.textContent = "⏱️ " + selectedSite.time;

    modal.classList.add("show");

}

surpriseButton.onclick = showRandomSite;

closeModal.onclick = () => {

    modal.classList.remove("show");

};

document.getElementById("new-site").onclick = showRandomSite;

document.getElementById("open-site").onclick = () => {

    window.open(selectedSite.url,"_blank");

};
    if(confirmOpen){
        window.open(site.url, "_blank");
    }

});
