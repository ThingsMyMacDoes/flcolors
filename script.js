// Themes and Color Names
const themes = {
  light: {
    colorNames: {
      color1: 'Dark Red',
      color2: 'Brown',
      color3: 'Olive',
      color4: 'Dark Green',
      color5: 'Dark Blue',
      color6: 'Dark Gray',
      pcolor1: 'Brick Red',
      pcolor2: 'Dark Tan',
      pcolor3: 'Forest Green',
      pcolor4: 'Pine Green',
      dcolor1: 'Rust',
      dcolor2: 'Gold',
      dcolor3: 'Moss Green',
      dcolor4: 'Deep Teal',
      tcolor1: 'Plum',
      tcolor2: 'Indigo',
      tcolor3: 'Charcoal',
      tcolor4: 'Bottle Green',
    },
  },
  dark: {
    colorNames: {
      color1: 'Light Red',
      color2: 'Peach',
      color3: 'Light Yellow',
      color4: 'Pale Green',
      color5: 'Sky Blue',
      color6: 'Light Gray',
      pcolor1: 'Soft Red',
      pcolor2: 'Tan',
      pcolor3: 'Pale Green',
      pcolor4: 'Mint Green',
      dcolor1: 'Light Pink',
      dcolor2: 'Golden Yellow',
      dcolor3: 'Light Olive',
      dcolor4: 'Pale Sea Green',
      tcolor1: 'Lavender',
      tcolor2: 'Baby Blue',
      tcolor3: 'Turquoise',
      tcolor4: 'Spring Green',
    },
  },
};

// Change Theme
function changeTheme(theme) {
  document.body.className = theme + '-theme';

  // Update all setting containers
  document.querySelectorAll('.setting-container').forEach(container => {
    container.className = `setting-container ${theme}-theme`;
  });

  // Update color names and color squares dynamically
  const colorNames = themes[theme].colorNames;
  document.querySelectorAll('.color-option').forEach(option => {
    const colorSquare = option.querySelector('.color-square');
    const colorName = option.querySelector('.color-name');
    const colorKey = colorSquare.dataset.color;

    if (colorNames[colorKey]) {
      // Update color name
      colorName.textContent = colorNames[colorKey];
      // Update the background color of the color square
      colorSquare.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${colorKey}`);
    }
  });

  // Update body text color dynamically
  const bodyTextColor = getComputedStyle(document.body).getPropertyValue('--text-color');
  document.body.style.color = bodyTextColor;
}

// Set Text Color
function setTextColor(colorKey) {
  const colorSquare = document.querySelector(`.color-square[data-color="${colorKey}"]`);
  if (colorSquare) {
    document.body.style.color = getComputedStyle(colorSquare).backgroundColor;
  }
}

// Initialize Theme and Colors
changeTheme('dark');
