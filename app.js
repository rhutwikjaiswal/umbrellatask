var img = document.getElementById("myImage");
img.src = "Pink umbrella.png";

var inputBtn = document.getElementById("inputBtn");
inputBtn.style.backgroundColor = "d0006f";

document.body.style.backgroundColor = "#FFEFD5";

var smallLoader = document.getElementById("smallLoader");
smallLoader.style.display = "none";

var logoImg = document.querySelector("#logoImg");
logoImg.style.display = "none";

var uploadIcon = document.getElementById('uploadIcon');
uploadIcon.style.display = "";

var newSvg = document.getElementById('newSvg');
newSvg.style.display = "none";


function changeToBlue() {
  newSvg.style.fill = "blue"; 
  newSvg.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Blue umbrella.png";  
    inputBtn.style.backgroundColor = "00a3e0";
    document.body.style.backgroundColor = "#ABFBF9";
    newSvg.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
    smallLoader.style.display = "none";
    uploadIcon.style.display = "";  
  }, 2000);
}

function changeToPink() {
  newSvg.style.fill = "pink";
  newSvg.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Pink umbrella.png";
    inputBtn.style.backgroundColor = "d0006f";
    document.body.style.backgroundColor = "#FFEFD5";
    newSvg.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
  }, 2000);
}
function changeToYellow() {
  newSvg.style.fill = "yellow";
  newSvg.style.display = "";
  img.style.visibility = "hidden";
  logoImg.style.display = "none";

  setTimeout(() => {
    img.src = "Yello umbrella.png";
    inputBtn.style.backgroundColor = "f5d730";
    document.body.style.backgroundColor = "#FFFF9F";
    newSvg.style.display = "none";
    logoImg.style.display = "";
    img.style.visibility = "";
  }, 2000);
}
function uploadIconFn(){
  uploadIcon.style.display = "none";  
  smallLoader.style.display = "";
}

function closeFn(){
  logoImg.remove(logoImg.logoImg);
  inputBtn.textContent = "UPLOAD LOGO";
  smallLoader.style.display = "none";
  uploadIcon.style.display = ""; 
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
