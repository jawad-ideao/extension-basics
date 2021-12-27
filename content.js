// This is only for youtube
window.onload = () => {
  const button = document.createElement("button");
  button.id = "darkModeButton";

  // For using it as per language selected
  // testText is a variable in _locales sub folder
  // button.textContent = chrome.i18n.getMessage("testText");

  button.textContent = "DO IT DARK";

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "darkSetting";

  document.querySelector("#end").prepend(button, checkBox, "Auto Apply?");

  button.addEventListener("click", () => enableDarkMode());
  checkBox.addEventListener("click", () => storeSetting());

  checkSettings();
};

function checkSettings() {
  chrome.storage.local.get(["enabled"], (result) => {
    console.log("Result", result);

    document.getElementById("darkSetting").checked = result.enabled;

    if (result.enabled) {
      enableDarkMode();
    }
  });
}

function storeSetting() {
  const isEnabled = document.getElementById("darkSetting").checked;

  const setting = {
    enabled: isEnabled,
  };

  chrome.storage.local.set(setting, () => console.log("stored", setting));
}

function enableDarkMode() {
  document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "black";
}
