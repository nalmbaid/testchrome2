document.addEventListener("click", function (e) {
  const button = e.target.closest("button");
  console.log("Clicked element:", e.target);
  console.log("Closest button:", button);

  if (!button) return;

  let text = button.textContent.trim();

  // Fallback 1: aria-label
  if (!text) {
    text = button.getAttribute("aria-label") || "";
  }

  // Fallback 2: aria-labelledby
  if (!text) {
    const labelledBy = button.getAttribute("aria-labelledby");
    if (labelledBy) {
      // aria-labelledby can list multiple ids
      labelledBy.split(/\s+/).forEach(id => {
        const labelEl = document.querySelector(`[id='${id}']`);
        if (labelEl) {
          text += " " + labelEl.textContent.trim();
        }
      });
      text = text.trim();
    }
  }

  console.log("Resolved button text:", text);

  if (text.toLowerCase().includes("add")) {
    console.log("Add detected! Showing popup");

    const img = document.createElement("img");
    img.src = "https://bit.ly/3Ck6DTU";

    Object.assign(img.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "50px",
      height: "50px",
      zIndex: "9999",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      border: "2px solid red",
      backgroundColor: "white",
      transition: "opacity 0.3s ease",
      opacity: "1"
    });

    document.body.appendChild(img);
  }
});
