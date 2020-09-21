// Disable the refresh on submit
document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});

function sendMessage(){
  var inputVal = document.getElementById("message").value; // Retrieve the user input
  var tchat = document.getElementById("tchat");

  var newTchatSend = document.createElement("div"); 
  newTchatSend.className = "tchat__send"; // Create a new div and give it the class "tchat__send"
  var newTchatSendMessage = document.createElement("p");
  newTchatSendMessage.className = "tchat__send__message"; // Create a new p and give it the class "tchat__send__message"

  newTchatSendMessage.innerHTML += inputVal;
  newTchatSend.prepend(newTchatSendMessage); // Assemble the new elements
  
  tchat.prepend(newTchatSend); // Insert it into the html (display the message)

  document.getElementById('message').value = ''; // Reset the input
}