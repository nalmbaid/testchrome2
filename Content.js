document.addEventListener("click", function (e) {
  // Always climb up to the nearest <button>
  const button = e.target.closest("button");
  console.log("Clicked element:", e.target);
  console.log("Closest button:", button);

  if (!button) return;

  // Get button text robustly
  let text = button.textContent.trim();

  // Fallback: aria-label
  if (!text) {
    text = button.getAttribute("aria-label") || "";
  }

  // Fallback: aria-labelledby
  if (!text) {
    const labelledBy = button.getAttribute("aria-labelledby");
    if (labelledBy) {
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

  // Action if "add" detected
  if (text.toLowerCase().includes("add")) {
    console.log("Add detected! Showing popup");

    const img = document.createElement("img");
    img.src = "https://bit.ly/3Ck6DTU";

    Object.assign(img.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "500px",
      height: "500px",
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
