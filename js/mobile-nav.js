/**
 * Mobile Navigation Manager
 * Handles burger menu toggle, mobile navigation overlay, and accessibility
 */
class MobileNavigation {
  constructor() {
    this.burgerButton = document.querySelector('.burger-menu');
    this.mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.closeButton = document.querySelector('.mobile-nav-close');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    if (!this.burgerButton || !this.mobileNavOverlay || !this.mobileNav) {
      console.warn('Mobile navigation elements not found');
      return;
    }
    
    // Bind event listeners
    this.burgerButton.addEventListener('click', this.toggleNav.bind(this));
    
    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.closeNav.bind(this));
    }
    
    if (this.mobileNavOverlay) {
      this.mobileNavOverlay.addEventListener('click', this.closeNav.bind(this));
    }
    
    // Close nav when clicking on navigation links
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', this.closeNav.bind(this));
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeNav();
      }
    });
    
    // Prevent body scroll when nav is open
    this.setupBodyScrollLock();
  }
  
  toggleNav() {
    if (this.isOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }
  
  openNav() {
    this.isOpen = true;
    this.mobileNavOverlay.classList.add('active');
    this.mobileNav.classList.add('active');
    this.burgerButton.classList.add('hidden');
    document.body.classList.add('mobile-nav-open');
    
    // Set focus to close button for accessibility
    if (this.closeButton) {
      setTimeout(() => {
        this.closeButton.focus();
      }, 300); // Wait for animation to complete
    }
    
    // Update aria attributes
    this.burgerButton.setAttribute('aria-expanded', 'true');
    this.mobileNav.setAttribute('aria-hidden', 'false');
  }
  
  closeNav() {
    this.isOpen = false;
    this.mobileNavOverlay.classList.remove('active');
    this.mobileNav.classList.remove('active');
    this.burgerButton.classList.remove('hidden');
    document.body.classList.remove('mobile-nav-open');
    
    // Return focus to burger button
    this.burgerButton.focus();
    
    // Update aria attributes
    this.burgerButton.setAttribute('aria-expanded', 'false');
    this.mobileNav.setAttribute('aria-hidden', 'true');
  }
  
  setupBodyScrollLock() {
    // Add CSS class to prevent body scroll when mobile nav is open
    const style = document.createElement('style');
    style.textContent = `
      .mobile-nav-open {
        overflow: hidden;
        position: fixed;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize mobile navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MobileNavigation();
});


