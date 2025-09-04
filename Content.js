document.addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button && button.textContent.toLowerCase().includes("add")) {

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("icon.png");

    img.style.position = "fixed";
    img.style.bottom = "20px";
    img.style.right = "20px";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.zIndex = "9999";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = "1";

    document.body.appendChild(img);

    setTimeout(() => {
      img.style.opacity = "0";
      setTimeout(() => img.remove(), 300);
    }, 2000);

  }
});
