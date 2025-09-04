document.addEventListener("click", function (e) {
  console.log("Clicked element:", e.target);

  const button = e.target.closest("button");
  console.log("Closest button:", button);

  if (button) {
    // Try multiple ways to get meaningful label
    let text = button.textContent.trim();

    if (!text) {
      // Check aria-label
      text = button.getAttribute("aria-label") || "";
    }

    if (!text) {
      // Check aria-labelledby (might point to another element's id)
      const labelledBy = button.getAttribute("aria-labelledby");
      if (labelledBy) {
        const labelEl = document.getElementById(labelledBy);
        if (labelEl) {
          text = labelEl.textContent.trim();
        }
      }
    }

    console.log("Resolved button text:", text.toLowerCase());

    // Now check if it contains "add"
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
  }
});
