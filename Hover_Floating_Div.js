const floatingDivs = document.querySelectorAll('.div_float');

const divStates = [];

floatingDivs.forEach((div, index) => {
  const state = {
    x: Math.random() * (window.innerWidth - div.offsetWidth),
    y: Math.random() * (window.innerHeight - div.offsetHeight),
    xDirection: Math.random() > 0.5 ? 1 : -1, // Random initial direction for x
    yDirection: Math.random() > 0.5 ? 1 : -1, // Random initial direction for y
  };

  div.addEventListener('mouseenter', () => {
    isPaused = true; // Pause movement when mouse enters any div
  });

  div.addEventListener('mouseleave', () => {
    isPaused = false; // Resume movement when mouse leaves any div
  });

  divStates.push(state);
});

let isPaused = false; // Global paused state

function moveDivs() {

  const speed = 1;

  if (!isPaused) {
    floatingDivs.forEach((div, index) => {
      let { x, y, xDirection, yDirection } = divStates[index];

      x += speed * xDirection;
      y += speed * yDirection;

      const maxX = window.innerWidth - div.offsetWidth;
      const maxY = window.innerHeight -30 - div.offsetHeight;

      if (x >= maxX || x <= 0) {
        xDirection *= -1;  
      }

      if (y >= maxY || y <= 0) {
        yDirection *= -1;
      }

      div.style.left = x + 'px';
      div.style.top = y + 'px';

      divStates[index] = { x, y, xDirection, yDirection };
    });
  }
}

setInterval(moveDivs, 10);
