// Function to initialize the theme and text color on page load
function initializeTheme() {
  changeTheme('dark');
}

// Function to change theme based on selection
function changeTheme(theme) {
  const root = document.documentElement;
  const colorNames = document.querySelectorAll('.color-name');

  if (theme === 'light') {
    root.style.setProperty('--bg-color', '#E1E1E1');
    root.style.setProperty('--text-color', '#3D3D3D');
    root.style.setProperty('--container-bg-color', '#EEEEEE');
    root.style.setProperty('--color1', '#c75300'); // Dark Orange
    root.style.setProperty('--color2', '#000000'); // Black
    root.style.setProperty('--color3', '#0061fd'); // Blue
    root.style.setProperty('--color4', '#007000'); // Green
    root.style.setProperty('--color5', '#c500db'); // Purple
    root.style.setProperty('--color6', '#d10070'); // Pink

    colorNames.forEach((name, index) => {
      const lightNames = ['Dark Orange', 'Black', 'Blue', 'Green', 'Purple', 'Pink'];
      name.textContent = lightNames[index];
    });
  } else {
    root.style.setProperty('--bg-color', '#2c2c2c');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--container-bg-color', '#1e1e1e');
    root.style.setProperty('--color1', '#ff6961'); // Red
    root.style.setProperty('--color2', '#ffb347'); // Orange
    root.style.setProperty('--color3', '#fdfd96'); // Yellow
    root.style.setProperty('--color4', '#77dd77'); // Green
    root.style.setProperty('--color5', '#aec6cf'); // Blue
    root.style.setProperty('--color6', '#cfcfc4'); // Gray

    colorNames.forEach((name, index) => {
      const darkNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Gray'];
      name.textContent = darkNames[index];
    });
  }
}

// Function to set text color based on high contrast selection
function setTextColor(color) {
  const root = document.documentElement;
  const textColors = {
    color1: getComputedStyle(root).getPropertyValue('--color1'),
    color2: getComputedStyle(root).getPropertyValue('--color2'),
    color3: getComputedStyle(root).getPropertyValue('--color3'),
    color4: getComputedStyle(root).getPropertyValue('--color4'),
    color5: getComputedStyle(root).getPropertyValue('--color5'),
    color6: getComputedStyle(root).getPropertyValue('--color6'),
  };

  document.body.style.color = textColors[color];
}

// Initialize theme on page load
window.onload = initializeTheme;
