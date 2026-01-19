// Q1

function showAlert() {
  alert("Q1: Link was clicked!");
}

// Q2

function buyPhone(model) {
  alert("Thanks for purchasing a phone from us: " + model);
}

// Q3

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Q4

function changeImage(img) {
  img.src = "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80";
}

function resetImage(img) {
  img.src = "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg";
}

// Q5

var counterValue = 0;

var counterDisplay = document.getElementById("counterDisplay");

var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
    counterValue++;
    counterDisplay.innerText = counterValue;
});

decreaseBtn.addEventListener("click", function() {
    counterValue--;
    counterDisplay.innerText = counterValue;
});