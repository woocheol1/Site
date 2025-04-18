document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const mobileMenu = document.querySelector('[role="dialog"]');
    const closeMenuButton = mobileMenu.querySelector('button[aria-label="Close navigation menu"]');
    
    if (mobileMenuTrigger) {
        mobileMenuTrigger.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
            mobileMenu.setAttribute('aria-hidden', 'false');
            mobileMenuTrigger.setAttribute('aria-expanded', 'true');
        });
    }
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
            mobileMenu.setAttribute('aria-hidden', 'true');
            mobileMenuTrigger.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Dropdown Toggle
    const dropdownButtons = document.querySelectorAll('button[aria-haspopup="true"]');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            
            const chevron = this.querySelector('.lucide-chevron-down');
            if (chevron) {
                chevron.classList.toggle('rotate-180');
            }
            
            const dropdown = this.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    });
    
    // Scroll Animation
    const scrollDown = document.querySelector('.animate-pulse-slow');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            const featuredSection = document.getElementById('featured-posts');
            if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Latest Posts Button
    const latestPostsButton = document.querySelector('button:contains("최신글 확인하기")');
    if (latestPostsButton) {
        latestPostsButton.addEventListener('click', function() {
            window.location.href = 'blog/latest-updates';
        });
    }
    
    // GPTS Button
    const gptsButton = document.querySelector('button.animated-button:contains("무료 GPTS 이용하기")');
    if (gptsButton) {
        gptsButton.addEventListener('click', function() {
            window.location.href = 'gpts';
        });
    }
    
    // Stagger Animation
    const staggerItems = document.querySelectorAll('.stagger-animation > *');
    staggerItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 150}ms`;
    });
    
    // Handle Video Background
    const video = document.querySelector('video');
    if (video) {
        // Ensure video plays automatically
        video.play().catch(error => {
            console.log('Auto-play was prevented:', error);
            
            // Create a play button as fallback
            const playButton = document.createElement('button');
            playButton.textContent = '비디오 재생';
            playButton.classList.add('absolute', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 
                                    'bg-purple-600', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'shadow-lg');
            playButton.style.zIndex = '20';
            
            video.parentNode.appendChild(playButton);
            
            playButton.addEventListener('click', () => {
                video.play();
                playButton.remove();
            });
        });
    }
});

// Simple polyfill for :contains selector
Element.prototype.contains = function(text) {
    return this.textContent.includes(text);
};
