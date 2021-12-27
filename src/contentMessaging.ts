// Sending msg to background script

// window.onload(testMessage());
function testMessage() {
  chrome.runtime.sendMessage(
    {
      payload: "Hello from Content",
    },
    (res) => console.log(res)
  );
}

// Getting msg from background script
// It will not work on initialization because background script initialize first
// Its better when communicating from background to content to bind it to specific event
chrome.runtime.onMessage.addListener((req, sender) => {
  console.log("request", req);
  console.log("sender", sender);
});
