function getResponse() {
  var userInput = document.getElementById("user-input").value;
  var responseDiv = document.getElementById("response");
  
  // Определите логику вашего помощника здесь
  var responseText = "Напишите в поиск браузера: " + userInput;
  
  responseDiv.innerHTML = responseText;
}
