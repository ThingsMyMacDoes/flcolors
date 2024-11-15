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
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#c75300'; // Dark Orange
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#000000'; // Black
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#0061fd'; // Blue
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#007000'; // Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#c500db'; // Purple
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#d10070'; // Pink
    });
  } else {
    // Apply dark theme styles (default)
    body.style.backgroundColor = '#1e1e1e';
    body.style.color = '#ffffff';
    containers.forEach(container => container.style.backgroundColor = '#2c2c2c');

    // Dark theme color squares
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#ff4c4c'; // Lighter Red
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#ff8c42'; // Lighter Orange
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#f5e342'; // Yellow
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#4caf50'; // Light Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#42a5f5'; // Light Blue
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#9e9e9e'; // Light Gray
    });
  }
}

function setTextColor(color) {
  // Set the text color based on the selected color option
  const body = document.body;
  switch(color) {
    case 'color1':
      body.style.color = '#c75300'; // Matches color1 in light theme
      break;
    case 'color2':
      body.style.color = '#000000'; // Matches color2 in light theme
      break;
    case 'color3':
      body.style.color = '#0061fd'; // Matches color3 in light theme
      break;
    case 'color4':
      body.style.color = '#007000'; // Matches color4 in light theme
      break;
    case 'color5':
      body.style.color = '#c500db'; // Matches color5 in light theme
      break;
    case 'color6':
      body.style.color = '#d10070'; // Matches color6 in light theme
      break;
  }
}
