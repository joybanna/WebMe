const images = document.querySelectorAll('.carousel-img');
const dots = document.querySelectorAll('.dot');

let count = 0;
let totalImg = images.length;
let width = images[0].clientWidth;

document.getElementById('prevBtn').addEventListener('click', () => {
  moveSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  moveSlide(1);
});

function moveSlide(direction) {
  // count += direction;
  // if (count >= totalImg) count = 0;
  // if (count < 0) count = images.length - 1;
  count = (count + direction + totalImg) % totalImg;
  images.forEach((item) => {
    item.style.transform = `translateX(${-count * width}px)`;
  });

  let dotActive = document.querySelector(`.dot[data-item="${count}"]`);
  dots.forEach((d) => d.classList.remove('active'));
  dotActive.classList.add('active');
}

dots.forEach((dot) => {
  dot.addEventListener('click', function () {
    dots.forEach((d) => d.classList.remove('active'));
    dot.classList.add('active');

    let itemValue = dot.dataset.item;
    images.forEach((item) => {
      item.style.transform = `translateX(${-itemValue * width}px)`;
    });
  });
});
