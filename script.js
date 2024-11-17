// Define themes and colors
const themes = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    containerBackground: '#f0f0f0',
    colors: {
      color1: { name: 'Light Red', value: '#ff5c5c' },
      color2: { name: 'Peach', value: '#ffa07a' },
      color3: { name: 'Light Yellow', value: '#ffff99' },
      color4: { name: 'Pale Green', value: '#90ee90' },
      color5: { name: 'Sky Blue', value: '#add8e6' },
      color6: { name: 'Light Gray', value: '#d3d3d3' },
      pcolor1: { name: 'Soft Red', value: '#ff9999' },
      pcolor2: { name: 'Tan', value: '#ffd1a1' },
      pcolor3: { name: 'Pale Green', value: '#d9ffb3' },
      pcolor4: { name: 'Mint Green', value: '#b3ffcc' },
      dcolor1: { name: 'Light Pink', value: '#ffc0cb' },
      dcolor2: { name: 'Golden Yellow', value: '#f8de7e' },
      dcolor3: { name: 'Light Olive', value: '#d0e17d' },
      dcolor4: { name: 'Pale Sea Green', value: '#a0d6b4' },
      tcolor1: { name: 'Lavender', value: '#d3b8f9' },
      tcolor2: { name: 'Baby Blue', value: '#a6d8f7' },
      tcolor3: { name: 'Turquoise', value: '#81d8cf' },
      tcolor4: { name: 'Spring Green', value: '#afffb5' },
    },
  },
  dark: {
    backgroundColor: '#2c2c2c',
    textColor: '#ffffff',
    containerBackground: '#1e1e1e',
    colors: {
      color1: { name: 'Red', value: '#ff6961' },
      color2: { name: 'Orange', value: '#ffb347' },
      color3: { name: 'Yellow', value: '#fdfd96' },
      color4: { name: 'Green', value: '#77dd77' },
      color5: { name: 'Blue', value: '#aec6cf' },
      color6: { name: 'Gray', value: '#cfcfc4' },
      pcolor1: { name: 'Dark Red', value: '#a52a2a' },
      pcolor2: { name: 'Brown', value: '#8b4513' },
      pcolor3: { name: 'Yellow-Green', value: '#9acd32' },
      pcolor4: { name: 'Green', value: '#008000' },
      dcolor1: { name: 'Rose', value: '#ffc0cb' },
      dcolor2: { name: 'Goldenrod', value: '#daa520' },
      dcolor3: { name: 'Olive', value: '#808000' },
      dcolor4: { name: 'Sea Green', value: '#2e8b57' },
      tcolor1: { name: 'Purple', value: '#9370db' },
      tcolor2: { name: 'Blue', value: '#4682b4' },
      tcolor3: { name: 'Teal', value: '#008080' },
      tcolor4: { name: 'Green', value: '#3cb371' },
    },
  },
};

// Change theme and update UI
function changeTheme(theme) {
  const currentTheme = themes[theme];

  // Update body background and text color
  document.body.style.backgroundColor = currentTheme.backgroundColor;
  document.body.style.color = currentTheme.textColor;

  // Update container background
  document.querySelectorAll('.setting-container').forEach(container => {
    container.style.backgroundColor = currentTheme.containerBackground;
  });

  // Update color squares and names
  document.querySelectorAll('.color-option').forEach(option => {
    const colorSquare = option.querySelector('.color-square');
    const colorName = option.querySelector('.color-name');
    const colorKey = colorSquare.dataset.color;
    if (currentTheme.colors[colorKey]) {
      colorSquare.style.backgroundColor = currentTheme.colors[colorKey].value;
      colorName.textContent = currentTheme.colors[colorKey].name;
    }
  });
}

// Initialize with default theme
changeTheme('dark');
