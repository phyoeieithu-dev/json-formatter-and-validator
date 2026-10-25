const validateButton = document.getElementById("validateButton");
const statusMessage = document.getElementById("statusMessage");

validateButton.addEventListener("click", function () {
  statusMessage.textContent = "Ready for Day 2";
});
