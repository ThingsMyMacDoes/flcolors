// Function to initialize the theme and radio button colors on page load
function initializeTheme() {
  // Set default theme to dark and configure colors for radio buttons
  changeTheme('dark');
  document.body.style.color = '#C5C5C5'; // Default text color
}

// Function to change the theme and dynamically update radio button colors
function changeTheme(theme) {
  const body = document.body;
  const containers = document.querySelectorAll('.setting-container');
  const radioButtons = document.querySelectorAll('.color-options input[type="radio"]');

  // Define the colors for radio buttons based on theme
  const lightThemeColors = ['#c75300', '#000000', '#0061fd', '#007000', '#c500db', '#d10070'];
  const darkThemeColors = ['#ffff00', '#00ffff', '#d3d3d3', '#00ff00', '#ff5cb3', '#ffa500'];

  // Select colors based on the theme
  const radioButtonColors = theme === 'light' ? lightThemeColors : darkThemeColors;

  // Apply the theme styles to the body and containers
  if (theme === 'light') {
    body.style.backgroundColor = '#E1E1E1';
    containers.forEach(container => (container.style.backgroundColor = '#EEEEEE'));
    body.style.color = '#3D3D3D'; // Default text color for light theme
  } else {
    body.style.backgroundColor = '#2c2c2c';
    containers.forEach(container => (container.style.backgroundColor = '#1e1e1e'));
    body.style.color = '#6C6C6C'; // Default text color for dark theme
  }

  // Update the background color of the radio buttons
  radioButtons.forEach((radio, index) => {
    radio.style.width = '20px';
    radio.style.height = '20px';
    radio.style.accentColor = radioButtonColors[index]; // Set the color of radio buttons
  });

  // Store the selected theme
  body.dataset.theme = theme;
}

// Function to set the text color based on the selected option
function setTextColor(color) {
  const body = document.body;

  // Define the text colors for all color options
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
    color5: '#ff5cb3', // Pink
    color6: '#ffa500'  // Orange
  };

  // Determine the current theme and get the correct text color
  const theme = body.dataset.theme || 'dark';
  const textColor = theme === 'light' ? lightThemeTextColors[color] : darkThemeTextColors[color];

  // Apply the text color
  body.style.color = textColor;
}

// Initialize the theme when the page loads
window.onload = initializeTheme;
