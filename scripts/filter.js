let divName = document.getElementsByClassName("divName");
let input = document.getElementById("userInput").value.trim();
for (let divElement of divName) {
  txtValue = divElement.textContent;
  if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
    divElement.style.display = "block";
  } else {
    divElement.style.display = "none";
  }
}
