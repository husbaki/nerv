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

  // Проверяем каждые 100мс после клика, когда анимация скролла закончится
  const intervalId = setInterval(() => {
    checkArrowVisibility();

    // Если прокрутка достигла нужного места, останавливаем проверку
    if (window.scrollY >= window.innerHeight - 10) {
      clearInterval(intervalId);
    }
  }, 100);
});

window.addEventListener('scroll', checkArrowVisibility);

// Проверим сразу при загрузке страницы (если уже внизу)
checkArrowVisibility();
