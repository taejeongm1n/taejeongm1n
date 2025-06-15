function toggleDescription(card) {
  const desc = card.querySelector(".tech-desc");
  const isVisible = desc.style.display === "block";

  document.querySelectorAll(".tech-desc").forEach(el => el.style.display = "none");

    desc.style.display = isVisible ? "none" : "block";
  }