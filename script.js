function toggleSection(id) {
  const section = document.getElementById(id);
  const isVisible = section.classList.contains("visible");

  document.querySelectorAll("section").forEach(sec => sec.classList.remove("visible"));

  if (!isVisible) {
    section.classList.add("visible");
  }
}