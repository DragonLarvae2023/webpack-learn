const para = document.createElement("p");
const arr = document.querySelector("body").appendChild(para);

let timer;
function resizeWindow(e) {
  clearTimeout(timer);
   timer = setTimeout(
    function (){
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(width, height);
      para.innerHTML = `width:${width} height:${height}`;
    },
    100
  );
}
window.addEventListener("resize", resizeWindow);
