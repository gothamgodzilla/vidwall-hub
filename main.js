const panels = document.querySelectorAll('.panel, .headline');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('shown');
      }
    });
  },
  { threshold: 0.16 }
);

panels.forEach((panel, index) => {
  panel.classList.add('reveal');
  panel.style.transitionDelay = `${index * 90}ms`;
  observer.observe(panel);
});
