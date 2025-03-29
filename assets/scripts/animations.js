document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".collection-item");

  items.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 200); // Adds a delay for each item (200ms apart)
  });
});
