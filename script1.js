document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-btn");
  const navLinks = document.querySelector(".right");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Toggle the icon between bars and cross
      const icon = toggleButton.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars"); // Toggle the bars icon
        icon.classList.toggle("fa-times"); // Toggle the cross icon
      }
    });
  } else {
    console.error("Toggle button or nav links are missing.");
  }
});
