// Theme Toggle Functionality
(function() {
  const THEME_KEY = 'theme-preference';
  
  // Get the current theme from localStorage or system preference
  function getTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  // Set theme on the document
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem(THEME_KEY, theme);
    
    // Update toggle button if it exists
    updateToggleButton(theme);
  }
  
  // Update the toggle button state
  function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const sunIcon = toggleBtn.querySelector('.sun-icon');
      const moonIcon = toggleBtn.querySelector('.moon-icon');
      
      if (theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }
  
  // Toggle between light and dark mode
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  // Initialize theme immediately to prevent flash
  initTheme();
  
  // Export functions to global scope
  window.themeToggle = {
    toggle: toggleTheme,
    set: setTheme,
    get: getTheme
  };
  
  // Add event listener when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      const toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
      }
    });
  } else {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  }
})();

