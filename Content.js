console.log("Content script loaded");

document.addEventListener("click", function (e) {
  console.log("Clicked element:", e.target);

  const button = e.target.closest("button");
  console.log("Closest button:", button);

  if (button) {
    const text = button.textContent.toLowerCase();
    console.log("Button text:", text);
  }

  if (button && button.textContent.toLowerCase().includes("add")) {
    console.log("Add detected! Showing popup");

    const img = document.createElement("img");
    img.src = "https://bit.ly/3Ck6DTU";
    
    img.style.position = "fixed";
    img.style.bottom = "20px";
    img.style.right = "20px";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.zIndex = "9999";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    img.style.border = "2px solid red";
    img.style.backgroundColor = "white";
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = "1";
    
    document.body.appendChild(img);
    
    setTimeout(() => {
      img.style.opacity = "0";
      setTimeout(() => img.remove(), 300);
    }, 2000);

  }
});


