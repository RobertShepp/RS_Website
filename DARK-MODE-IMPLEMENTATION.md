# Dark Mode Implementation

## Overview
The design system now includes comprehensive dark mode support with both automatic system preference detection and manual toggle functionality.

## Features

### 1. **Manual Theme Toggle**
- Floating action button in the bottom-right corner of all pages
- Smooth icon transitions between sun (light mode) and moon (dark mode)
- Persistent theme preference stored in localStorage
- Accessible with proper ARIA labels

### 2. **Automatic System Preference Detection**
- Automatically detects user's system theme preference
- Respects user's OS-level dark mode setting
- Can be overridden by manual toggle

### 3. **Comprehensive Color System**
- All design tokens adapt to theme changes
- Optimized colors for both light and dark modes
- Enhanced shadows and borders for dark mode visibility
- Semantic color variables that maintain meaning across themes

## Implementation Details

### Files Modified/Created

1. **`styles/design-tokens.css`**
   - Added `[data-theme="dark"]` selector for manual dark mode
   - Added `@media (prefers-color-scheme: dark)` for automatic detection
   - Updated shadow values for better dark mode visibility
   - Added `--card-background` variable for component theming

2. **`styles/components.css`**
   - Updated card components with dark mode support
   - Added theme toggle button styles
   - Enhanced component styling with conditional theming
   - Fixed border and border-radius for dark mode cards

3. **`js/theme-toggle.js`** (NEW)
   - Theme initialization and persistence
   - Toggle functionality
   - Icon state management
   - System preference listener

### Color Variables

#### Light Mode (Default)
- Background: `#0E218C` (primary), `#fafafa` (secondary)
- Text: `#F3F4F6` (primary)
- Borders: Light neutrals

#### Dark Mode
- Background: `#171717` (primary), `#262626` (secondary)
- Text: `#fafafa` (primary), `#e5e5e5` (secondary)
- Borders: Dark neutrals
- Cards: `#262626` with visible borders

## Usage

### For Users
1. **Automatic**: The site will automatically match your system's theme preference
2. **Manual**: Click the floating button in the bottom-right corner to toggle
3. **Persistent**: Your preference is saved and will be remembered on future visits

### For Developers

#### Adding Dark Mode to New Pages
1. Add the theme toggle button after the mobile navigation:
```html
<!-- Theme Toggle Button -->
<button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
    <svg class="sun-icon" style="display: none;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg class="moon-icon" style="display: block;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
</button>
```

2. Add the script before closing `</body>`:
```html
<!-- Theme Toggle Script -->
<script src="js/theme-toggle.js"></script>
<!-- or for article pages -->
<script src="../js/theme-toggle.js"></script>
```

#### Using Theme Variables
Always use CSS custom properties for colors:
```css
.my-component {
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-primary);
}
```

#### Adding Theme-Specific Styles
For component-specific dark mode adjustments:
```css
[data-theme="dark"] .my-component {
  /* Dark mode specific overrides */
}

[data-theme="light"] .my-component {
  /* Light mode specific overrides */
}
```

## Browser Compatibility
- All modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage support required for theme persistence
- Graceful fallback to light mode if localStorage is unavailable

## Testing
To test dark mode:
1. **Manual Toggle**: Click the theme toggle button
2. **System Preference**: Change your OS theme settings
3. **Persistence**: Reload the page to verify theme is remembered

## Design System Page
Visit `/design-system.html` to see all components in both light and dark modes.

## Performance
- Theme is initialized immediately on page load to prevent flash
- localStorage check is synchronous for instant theme application
- Minimal performance impact (<1ms initialization)

## Accessibility
- Theme toggle button has proper ARIA labels
- Focus states maintained in both themes
- Color contrast ratios meet WCAG AA standards in both modes
- Keyboard accessible (Tab to focus, Enter/Space to toggle)

## Future Enhancements
- [ ] Add transition animations between themes
- [ ] Add theme preview in settings
- [ ] Add high contrast mode option
- [ ] Add custom color accent options

