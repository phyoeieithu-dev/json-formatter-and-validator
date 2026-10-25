const jsonInput = document.getElementById("jsonInput");
const validateButton = document.getElementById("validateButton");
const statusMessage = document.getElementById("statusMessage");

validateButton.addEventListener("click", function () {
  try {
    JSON.parse(jsonInput.value);
    statusMessage.textContent = "Valid JSON!";
  } catch (error) {
    statusMessage.textContent = "Invalid JSON occurred: " + error.message;
  }
});
