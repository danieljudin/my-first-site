const images = [
    "ribery.png",
    "vieira.png",
    "ballack.png",
    "dalglish.png",
    "petit.png",
    "muller.png",
    "zidane.png",
    "kohler.png",
    "okocha.png",
    "carvalho.png",
    "cruyff.png",
    "drogba.png",
    "raul.png",
    "forlan.png",
    "del-piero.png",
    "maldini.png",
    "milito.png",
];

const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imageElement = document.getElementById("random-image");
    imageElement.src = selectedImage;
};

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", randomImage);