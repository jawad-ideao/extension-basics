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

  // for youtube specifically
  document.querySelector("#end").prepend(button, checkBox, "Auto Apply?");

  button.addEventListener("click", () => enableDarkMode());
  checkBox.addEventListener("click", () => storeSetting());

  checkSettings();
};

function checkSettings() {
  chrome.storage.local.get(["enabled"], (result) => {
    console.log("Result", result);

    const settingCheckbox = document.getElementById(
      "darkSetting"
    ) as HTMLInputElement;
    settingCheckbox.checked = result.enabled;

    if (result.enabled) {
      enableDarkMode();
    }
  });
}

function storeSetting() {
  const settingCheckbox = document.getElementById(
    "darkSetting"
  ) as HTMLInputElement;
  const isEnabled = settingCheckbox.checked;

  const setting = {
    enabled: isEnabled,
  };

  chrome.storage.local.set(setting, () => console.log("stored", setting));
}

function enableDarkMode() {
  const container = document.getElementsByTagName("ytd-app")[0] as HTMLElement;
  container.style.backgroundColor = "black";
}
