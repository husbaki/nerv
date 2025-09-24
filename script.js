const arrow = document.querySelector('.scroll-down-arrow');

function checkArrowVisibility() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 100) {
    arrow.style.opacity = '0';
    arrow.style.pointerEvents = 'none';
  } else {
    arrow.style.opacity = '1';
    arrow.style.pointerEvents = 'auto';
  }
}

arrow.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });

  const intervalId = setInterval(() => {
    checkArrowVisibility();
    if (window.scrollY >= window.innerHeight - 10) {
      clearInterval(intervalId);
    }
  }, 100);
});

window.addEventListener('scroll', checkArrowVisibility);
checkArrowVisibility();

// Smooth scroll for navbar links
document.querySelectorAll('.navbar__menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
