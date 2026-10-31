const jsonInput = document.getElementById("jsonInput");
const validateButton = document.getElementById("validateButton");
const formatButton = document.getElementById("formatButton");
const clearButton = document.getElementById("clearButton");
const statusMessage = document.getElementById("statusMessage");

validateButton.addEventListener("click", function () {
  if (jsonInput.value.trim() === "") {
    statusMessage.textContent = "Please enter JSON first.";
    return;
  }

  try {
    JSON.parse(jsonInput.value);
    statusMessage.textContent = "Valid JSON!";
  } catch (error) {
    statusMessage.textContent = "Invalid JSON occurred: " + error.message;
  }
});

formatButton.addEventListener("click", function () {
  if (jsonInput.value.trim() === "") {
    statusMessage.textContent = "Please enter JSON first.";
    return;
  }

  try {
    const parsedValue = JSON.parse(jsonInput.value);
    const formattedJson = JSON.stringify(parsedValue, null, 4);

    jsonInput.value = formattedJson;
    statusMessage.textContent = "JSON formatted!";
  } catch (error) {
    statusMessage.textContent = "Invalid JSON occurred: " + error.message;
  }
});

clearButton.addEventListener("click", function () {
  jsonInput.value = "";
  statusMessage.textContent = "";
});
