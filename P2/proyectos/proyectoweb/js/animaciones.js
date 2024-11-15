document.addEventListener("DOMContentLoaded", function() {
  const h3Elements = document.querySelectorAll('.bouncee');

  // Callback para el Intersection Observer
  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Añadir la clase bounce
              entry.target.classList.add('bounce');
              
              // Retirar la clase después de la animación para permitir el re-bounce
              entry.target.addEventListener('animationend', () => {
                  entry.target.classList.remove('bounce');
              }, { once: true });
          }
      });
  };

  // Configuración del Intersection Observer
  const observer = new IntersectionObserver(callback, {
      threshold: 0.1 // Cuando el 10% del h3 es visible
  });

  h3Elements.forEach(h3 => {
      observer.observe(h3); // Observar cada h3
  });
});
