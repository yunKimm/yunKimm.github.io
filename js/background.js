const images = ["1.png", "2.jpg", "4.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);