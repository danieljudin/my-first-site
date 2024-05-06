const images = [
    "dewsbury-hall.png",
    "sheaf.png",
    "clauss.png",
    "david-costa.png",
    "dest.png",
    "udol.png",
    "gabri-veiga.png",
    "nkunku.png",
    "beier.png",
    "muslera.png",
    "dreyer.png",
    "zaha.png",
    "teze.png",
    "hancko.png",
    "robinson.png",
    "otamendi.png",
    "mcginn.png",
    "loftus-cheek.png",
    "kudus.png",
    "estupinian.png",
    "cucho hernandez.png",
    "alvarez.png",
    "szoboszlai.png",
    "st.juste.png",
    "saint-maximin.png",
    "konate.png",
    "douglas-luiz.png",
    "doku.png",
    "lucas-vazquez.png",
    // Add more image URLs as needed
];

const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imageElement = document.getElementById("random-image");
    imageElement.src = selectedImage;
};

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", randomImage);
