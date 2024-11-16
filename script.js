// Function to initialize the theme and text color on page load
function initializeTheme() {
  changeTheme('dark'); // Default theme is dark
  document.body.style.color = '#C5C5C5'; // Default text color
}

// Function to change theme and dynamically update radio button colors
function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  // Define radio button colors for both themes
  const lightThemeColors = ['#c75300', '#000000', '#0061fd', '#007000', '#c500db', '#d10070'];
  const darkThemeColors = ['#ffff00', '#00ffff', '#d3d3d3', '#00ff00', '#ff5cb3', '#ffa500'];

  // Select appropriate colors for the current theme
  const radioButtonColors = theme === 'light' ? lightThemeColors : darkThemeColors;

  if (theme === 'light') {
    // Light theme styles
    body.style.backgroundColor = '#E1E1E1';
    containers.forEach(container => (container.style.backgroundColor = '#EEEEEE'));
    body.style.color = '#3D3D3D'; // Default text color for light theme
  } else {
    // Dark theme styles
    body.style.backgroundColor = '#2c2c2c';
    containers.forEach(container => (container.style.backgroundColor = '#1e1e1e'));
    body.style.color = '#6C6C6C'; // Default text color for dark theme
  }

  // Update the background colors of the radio buttons
  radioButtons.forEach((radio, index) => {
    radio.style.backgroundColor = radioButtonColors[index];
  });

  // Store the selected theme
  body.dataset.theme = theme;
}

// Function to set text color based on the selected color option
function setTextColor(color) {
  const body = document.body;

  // Define text colors for both themes
  const lightThemeTextColors = {
    color1: '#c75300', // Dark Orange
    color2: '#000000', // Black
    color3: '#0061fd', // Blue
    color4: '#007000', // Green
    color5: '#c500db', // Purple
    color6: '#d10070'  // Pink
  };

  const darkThemeTextColors = {
    color1: '#ffff00', // Yellow
    color2: '#00ffff', // Cyan
    color3: '#d3d3d3', // Light Gray
    color4: '#00ff00', // Bright Green
    color5: '#ff5cb3', // Light Pink
    color6: '#ffa500'  // Orange
  };

  // Determine the current theme and set the text color accordingly
  const theme = body.dataset.theme || 'dark';
  const textColor = theme === 'light' ? lightThemeTextColors[color] : darkThemeTextColors[color];

  body.style.color = textColor;
}

// Initialize theme on page load
window.onload = initializeTheme;
