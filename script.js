function getResponse() {
  var userInput = document.getElementById("user-input").value;
  var responseDiv = document.getElementById("response");
  
  // Определите логику вашего помощника здесь
  var responseText = "Вы сказали: " + userInput;
  
  responseDiv.innerHTML = responseText;
}
