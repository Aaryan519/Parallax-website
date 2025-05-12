window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelectorAll(".layer").forEach((layer, index) => {
    layer.style.transform = `translateY(${scrolled * (0.2 + index * 0.1)}px)`;
  });
});
