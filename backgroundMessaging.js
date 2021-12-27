// Important
// 1- Always sanitize the request from content script because it might get tempered
// 2- Always verify the sender
// 3- The data on payload can be leak and visible in client side

try {
  importScripts("background.js");

  // Getting msg from content script
  chrome.runtime.onMessage.addListener((req, sender, res) => {
    console.log("request", req);
    console.log("sender", sender);
    console.log("res", res());
  });

  //Sending msg to content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { name: "Jawad" });
  });
} catch (e) {
  console.error(e);
}
