document.addEventListener("click", function (e) {

  const button = e.target.closest("button");

  if (button) {
    const text = button.textContent.toLowerCase();
  }

  if (button && button.textContent.toLowerCase().includes("add")) {

    const img = document.createElement("img");
    img.src = "https://bit.ly/3Ck6DTU";
    
    img.style.position = "fixed";
    img.style.bottom = "20px";
    img.style.right = "20px";
    img.style.width = "500px";
    img.style.height = "500px";
    img.style.zIndex = "9999";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    img.style.border = "2px solid red";
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = "1";

    ///https://www.w3schools.com/jsref/met_node_appendchild.asp
    document.body.appendChild(img);
    
  }
});


