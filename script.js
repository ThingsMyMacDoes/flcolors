function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');
  const colorSquares = document.querySelectorAll('.color-square');

  if (theme === 'light') {
    // Apply light theme styles
    body.style.backgroundColor = '#E1E1E1';
    body.style.color = '#444444';
    containers.forEach(container => container.style.backgroundColor = '#EEEEEE');

    // Light theme color squares
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#ff6961';
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#ffb347';
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#fdfd96';
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#77dd77';
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#aec6cf';
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#cfcfc4';
    });
  } else {
    // Apply dark theme styles (default)
    body.style.backgroundColor = '#1e1e1e';
    body.style.color = '#ffffff';
    containers.forEach(container => container.style.backgroundColor = '#2c2c2c');

    // Dark theme color squares
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#ff4c4c';
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#ff8c42';
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#f5e342';
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#4caf50';
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#42a5f5';
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#9e9e9e';
    });
  }
}

function setTextColor(color) {
  // Set the text color based on the selected color option
  const body = document.body;
  switch(color) {
    case 'color1':
      body.style.color = '#ff6961';
      break;
    case 'color2':
      body.style.color = '#ffb347';
      break;
    case 'color3':
      body.style.color = '#fdfd96';
      break;
    case 'color4':
      body.style.color = '#77dd77';
      break;
    case 'color5':
      body.style.color = '#aec6cf';
      break;
    case 'color6':
      body.style.color = '#cfcfc4';
      break;
  }
}
