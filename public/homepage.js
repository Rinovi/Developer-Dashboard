function scrollToArticle() {
  const targetArticle = document.querySelector('.targetArticle');
  const scrollBtn = document.querySelector('.scrollBtn');

  scrollBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
