document.addEventListener("click", function (e) {
  const button = e.target.closest("*");

  if (button && button.textContent.toLowerCase().includes("add")) {

    chrome.notifications.create({
      type: "basic",
      iconUrl: chrome.runtime.getURL("icon.png"),
      title: "Added!",
      message: "Item was added successfully."
    });

  }
});
