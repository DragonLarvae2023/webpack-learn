import img from "../img/logo-green-small-1x.png";
import st from "./constant.txt"
import "./index.css"
const image = document.createElement("img");
image.src = img
image.alt = "this is a simple image";
const body = document.getElementsByTagName("body")[0];
body.appendChild(image);
console.log("hi this is for compariso")
const str=st