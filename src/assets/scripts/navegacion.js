document.getElementById("actionHome").onclick = function () {
  ocultarTodo();
};

document.getElementById("actionPageTwo").onclick = function () {
  mostrarPageTwo();
};

document.getElementById("actionFour").onclick = function () {
  mostrarPageFour();
};

document.getElementById("actionAbout").onclick = function () {
  mostrarAbout();
};

function mostrarPageTwo() {
  document.getElementById("pageTwo").style.display = "block";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("pageAbout").style.display = "none";
}

function mostrarPageFour() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageFour").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("pageAbout").style.display = "none";
}

function ocultarTodo() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("pageAbout").style.display = "none";
}

function mostrarAbout() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("pageAbout").style.display = "block";
}
