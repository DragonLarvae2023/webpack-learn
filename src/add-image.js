import img from "./nat-3.jpg";
const image = document.createElement("img");
image.src = img;
image.alt = "this is a simple image";
const body = document.getElementsByTagName("body")[0];
body.appendChild(image);
