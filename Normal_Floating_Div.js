const floatingDivs = document.querySelectorAll('.div_float');

const divStates = [];

floatingDivs.forEach((div, index) => {
  const state = {
    x: Math.random() * (window.innerWidth - div.offsetWidth),
    y: Math.random() * (window.innerHeight - div.offsetHeight),
    
    xDirection: Math.random() > 0.5 ? 1 : -1, // Random initial direction for x
    yDirection: Math.random() > 0.5 ? 1 : -1  // Random initial direction for y
    
    // xDirection: 1,
    // yDirection: 1
  };
  divStates.push(state);
});

function moveDivs() {
  const speed = 1;

  floatingDivs.forEach((div, index) => {
    let { x, y, xDirection, yDirection } = divStates[index];

    x += speed * xDirection;
    y += speed * yDirection;

    const maxX = window.innerWidth - div.offsetWidth;
    const maxY = window.innerHeight - div.offsetHeight;

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

setInterval(moveDivs, 10);
