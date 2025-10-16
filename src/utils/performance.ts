// Performance monitoring utilities
export function measurePerformance() {
  // Measure Core Web Vitals
  if ('web-vital' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }

  // Measure page load time
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    
    console.log('Page Load Time:', loadTime);
    console.log('DOM Content Loaded:', domContentLoaded);
    
    // Send to analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_load_time', {
        value: Math.round(loadTime),
        custom_parameter_1: 'portfolio_website'
      });
    }
  });

  // Measure resource loading
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        if (resource.duration > 1000) { // Log slow resources
          console.warn('Slow resource:', resource.name, resource.duration);
        }
      }
    }
  });
  
  observer.observe({ entryTypes: ['resource'] });
}

// Preload critical resources
export function preloadCriticalResources() {
  const criticalImages = ['/profile.png', '/black-logo.png'];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Optimize images
export function optimizeImageLoading() {
  // Add loading="lazy" to all images that don't have it
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
