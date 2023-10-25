
// Get DOM elements
var messageContainer = document.getElementById("message-container");
var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("message-input");

// Function to handle sending messages
function sendMessage(event) {
  event.preventDefault();

  // Get message text
  var messageText = messageInput.value;

  // Create new message element
  var messageElement = document.createElement("div");
  messageElement.textContent = messageText;

  // Add message element to container
  messageContainer.appendChild(messageElement);

  // Clear input value
  messageInput.value = "";

  // Scroll to bottom of container
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Add event listener to the message form
messageForm.addEventListener("submit", sendMessage);