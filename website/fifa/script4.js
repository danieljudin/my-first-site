const images = [
    "inaki.png",
    "kubo.png",
    "garnacho.png",
    "anton.png",
    "banza.png",
    "bentaleb.png",
    "bisseck.png",
    "brobbey.png",
    "calafiori.png",
    "camavinga.png",
    "dante.png",
    "ferguson.png",
    "goretzka.png",
    "gudmundson.png",
    "havertz.png",
    "cancelo.png",
    "lacazette.png",
    "mahrez.png",
    "medina.png",
    "merino.png",
    "milinkovic.png",
    "rafa.png",
    "mkhitaryan.png",
    "palmer.png",
    "romero.png",
    "busqets.png",
    "simons.png",
    "unai.png",
    "santos.png",
    "vanaken2.png",
    "vardy.png",
    "veerman2.png",
    "white.png",
];

const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imageElement = document.getElementById("random-image");
    imageElement.src = selectedImage;
};

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", randomImage);