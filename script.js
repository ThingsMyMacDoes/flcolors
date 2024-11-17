// Themes and Color Names
const themes = {
  light: {
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
  dark: {
    colorNames: {
      color1: 'Red',
      color2: 'Orange',
      color3: 'Yellow',
      color4: 'Green',
      color5: 'Blue',
      color6: 'Gray',
      pcolor1: 'Dark Red',
      pcolor2: 'Brown',
      pcolor3: 'Yellow-Green',
      pcolor4: 'Green',
      dcolor1: 'Rose',
      dcolor2: 'Goldenrod',
      dcolor3: 'Olive',
      dcolor4: 'Sea Green',
      tcolor1: 'Purple',
      tcolor2: 'Blue',
      tcolor3: 'Teal',
      tcolor4: 'Green',
    },
  },
};

// Change Theme
function changeTheme(theme) {
  document.body.className = theme + '-theme';

  // Update color names dynamically
  const colorNames = themes[theme].colorNames;
  document.querySelectorAll('.color-option').forEach(option => {
    const colorSquare = option.querySelector('.color-square');
    const colorName = option.querySelector('.color-name');
    const colorKey = colorSquare.dataset.color;
    if (colorNames[colorKey]) {
      colorName.textContent = colorNames[colorKey];
    }
  });
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
