// Function to initialize the theme on page load
function initializeTheme() {
  // Set default theme to dark
  changeTheme('dark');
}

// Function to change theme based on selection
function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');
  const colorSquares = document.querySelectorAll('.color-square');

  if (theme === 'light') {
    // Apply light theme styles
    body.style.backgroundColor = '#E1E1E1';
    containers.forEach(container => container.style.backgroundColor = '#EEEEEE');

    // Light theme color squares for high contrast options
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#c75300'; // Dark Orange
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#000000'; // Black
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#0061fd'; // Blue
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#007000'; // Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#c500db'; // Purple
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#d10070'; // Pink
    });
  } else {
    // Apply dark theme styles
    body.style.backgroundColor = '#1e1e1e';
    containers.forEach(container => container.style.backgroundColor = '#2c2c2c');

    // Dark theme color squares for high contrast options
    colorSquares.forEach(square => {
      if (square.dataset.color === 'color1') square.style.backgroundColor = '#ff4c4c'; // Lighter Red
      if (square.dataset.color === 'color2') square.style.backgroundColor = '#ff8c42'; // Lighter Orange
      if (square.dataset.color === 'color3') square.style.backgroundColor = '#f5e342'; // Yellow
      if (square.dataset.color === 'color4') square.style.backgroundColor = '#4caf50'; // Light Green
      if (square.dataset.color === 'color5') square.style.backgroundColor = '#42a5f5'; // Light Blue
      if (square.dataset.color === 'color6') square.style.backgroundColor = '#9e9e9e'; // Light Gray
    });
  }

  // Store the selected theme in a variable to use in setTextColor
  body.dataset.theme = theme;
}

// Function to set text color based on high contrast selection
function setTextColor(color) {
  const body = document.body;
  const theme = body.dataset.theme; // Get the current theme

  // Set text color based on the selected color option and the current theme
  if (theme === 'light') {
    switch(color) {
      case 'color1':
        body.style.color = '#c75300'; // Dark Orange
        break;
      case 'color2':
        body.style.color = '#000000'; // Black
        break;
      case 'color3':
        body.style.color = '#0061fd'; // Blue
        break;
      case 'color4':
        body.style.color = '#007000'; // Green
        break;
      case 'color5':
        body.style.color = '#c500db'; // Purple
        break;
      case 'color6':
        body.style.color = '#d10070'; // Pink
        break;
    }
  } else { // dark theme
    switch(color) {
      case 'color1':
        body.style.color = '#ff4c4c'; // Lighter Red
        break;
      case 'color2':
        body.style.color = '#ff8c42'; // Lighter Orange
        break;
      case 'color3':
        body.style.color = '#f5e342'; // Yellow
        break;
      case 'color4':
        body.style.color = '#4caf50'; // Light Green
        break;
      case 'color5':
        body.style.color = '#42a5f5'; // Light Blue
        break;
      case 'color6':
        body.style.color = '#9e9e9e'; // Light Gray
        break;
    }
  }
}

// Initialize theme on page load
window.onload = initializeTheme;
