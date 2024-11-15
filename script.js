function changeTheme(theme) {
  if (theme === 'light') {
    // Apply light theme styles
    document.body.style.backgroundColor = '#E1E1E1'; // Light background
    document.body.style.color = '#444444'; // Dark text color
    const containers = document.querySelectorAll('.setting-container');
    containers.forEach(container => {
      container.style.backgroundColor = '#EEEEEE'; // Light background for containers
    });
  } else {
    // Apply dark theme styles (default)
    document.body.style.backgroundColor = '#1e1e1e'; // Dark background
    document.body.style.color = '#ffffff'; // Light text color
    const containers = document.querySelectorAll('.setting-container');
    containers.forEach(container => {
      container.style.backgroundColor = '#2c2c2c'; // Dark background for containers
    });
  }
}
