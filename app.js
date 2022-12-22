 var img = document.getElementById("myImage");
 img.src = "Pink umbrella.png";

var inputBtn = document.getElementById("inputBtn");
inputBtn.style.backgroundColor = "d0006f";

document.body.style.backgroundColor = "#FFEFD5";

var pinkLoader = document.getElementById("pinkLoader");
pinkLoader.style.display = "none";

var yellowLoader = document.getElementById("yellowLoader");
yellowLoader.style.display = "none";

var blueLoader  = document.getElementById("blueLoader");
blueLoader.style.display = "none";

var smallLoader = document.getElementById("smallLoader");
smallLoader.style.display = "none";

var logoImg = document.querySelector("#logoImg");
logoImg.style.display = "none";

var uploadIcon = document.getElementById('uploadIcon');
uploadIcon.style.display = "";




function changeToBlue() {
  blueLoader.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Blue umbrella.png";  
    inputBtn.style.backgroundColor = "00a3e0";
    document.body.style.backgroundColor = "#ABFBF9";
    blueLoader.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
    smallLoader.style.display = "none";
    uploadIcon.style.display = "";  
  }, 2000);
}

function changeToPink() {
  pinkLoader.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Pink umbrella.png";
    inputBtn.style.backgroundColor = "d0006f";
    document.body.style.backgroundColor = "#FFEFD5";
    pinkLoader.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
  }, 2000);
}
function changeToYellow() {
  yellowLoader.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Yello umbrella.png";
    inputBtn.style.backgroundColor = "f5d730";
    document.body.style.backgroundColor = "#FFFF9F";
    yellowLoader.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
  }, 2000);
}
function uploadIconFn(){
  uploadIcon.style.display = "none";  
  smallLoader.style.display = "";
}


var reader1 = new FileReader();
reader1.addEventListener("load", (e) => {
  document.querySelector("#logoImg").src = e.target.result;
});
document.addEventListener("DOMContentLoaded", (e) => {
  document.forms.pickFile.file.addEventListener("change", (e) => {
    reader1.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0])
    inputBtn.textContent = e.target.files[0].name;
  });
});




































// window.addEventListener("load", ()=>{
//     preLoader.classList.add("loader-hidden");

//     preLoader.addEventListener("transitioned", () =>{
//         document.body.removeChild("preLoader");
//     })
// })
// preLoader.style.display = "none";

// const myTimeout = setTimeout(myGreeting, 5000);

// <span id="Uimage"><img src="images\Blue umbrella.png" height="200px" width="200px"/></span>
// <span id="Uimage"><img src="images\Pink umbrella.png" height="200px" width="200px"/></span>
// <span id="Uimage"><img src="images\Yello umbrella.png" height="200px" width="200px" /></span>
