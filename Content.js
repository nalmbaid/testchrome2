
document.addEventListener("click", function (e) {
  const button = e.target.closest("*");

  if (button && button.textContent.toLowerCase().includes("add")) {

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("icon.png"); // Load from extension folder
    img.style.position = "fixed";
    img.style.bottom = "20px";
    img.style.right = "20px";
    img.style.width = "120px";
    img.style.zIndex = "9999";

    document.body.appendChild(img);

  }
});
