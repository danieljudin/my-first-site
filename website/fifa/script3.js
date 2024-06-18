const images = [
    "alderweireld.png",
    "golovin2.png",
    "hall2.png",
    "ferguson2.png",
    "koulibaly2.png",
    "musiala.png",
    "szc2.png",
    "tavernier2.png",
    "veerman.png",
    "vanaken.png",
    "wendell2.png",
    "kane.png",
    "frimpong.png",
    "foden.png",
    "schlotterbeck.png",
    "salah.png",
    "thernandez.png",
    "lewandowski.png",
    "di-maria.png",
    "valverde.png",
    "savio.png",
];

const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imageElement = document.getElementById("random-image");
    imageElement.src = selectedImage;
};

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", randomImage);
