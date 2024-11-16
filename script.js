// Function to initialize the theme and text color on page load
function initializeTheme() {
  changeTheme('dark'); // Set default theme to dark
  document.body.style.color = '#C5C5C5'; // Default text color
}

// Function to change theme based on selection
function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');

  if (theme === 'light') {
    // Apply light theme styles
    body.style.backgroundColor = '#E1E1E1';
    containers.forEach(container => (container.style.backgroundColor = '#EEEEEE'));
    body.style.color = '#3D3D3D'; // Default text color for light theme
  } else {
    // Apply dark theme styles
    body.style.backgroundColor = '#2c2c2c';
    containers.forEach(container => (container.style.backgroundColor = '#1e1e1e'));
    body.style.color = '#6C6C6C'; // Default text color for dark theme
  }

  // Store the selected theme in a variable to use in setTextColor
  body.dataset.theme = theme;
}

// Function to set text color based on high contrast selection
function setTextColor(color) {
  const body = document.body;

  // Define text colors for light and dark themes
  const lightThemeColors = {
    color1: '#c75300', // Dark Orange
    color2: '#000000', // Black
    color3: '#0061fd', // Blue
    color4: '#007000', // Green
    color5: '#c500db', // Purple
    color6: '#d10070'  // Pink
  };

  const darkThemeColors = {
    color1: '#ffff00', // Yellow
    color2: '#00ffff', // Cyan
    color3: '#d3d3d3', // Light Gray
    color4: '#00ff00', // Bright Green
    color5: '#ff5cb3', // Light Pink
    color6: '#ffa500'  // Orange
  };

  // Apply the corresponding text color based on the theme
  const theme = body.dataset.theme || 'dark'; // Default to dark theme
  const textColor = theme === 'light' ? lightThemeColors[color] : darkThemeColors[color];

  body.style.color = textColor;
}

// Initialize theme on page load
window.onload = initializeTheme;
