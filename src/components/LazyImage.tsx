import { useState, useRef, useEffect, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  width?: number;
  height?: number;
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'sync' | 'async' | 'auto';
  role?: string;
  longdesc?: string;
  loading?: 'lazy' | 'eager';
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  onLoad,
  onError,
  width,
  height,
  fetchPriority = 'auto',
  decoding = 'async',
  role,
  longdesc,
  loading = 'lazy'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Ensure we have width and height to prevent layout shifts
  const hasValidDimensions = width && height;

  useEffect(() => {
    // Skip intersection observer for users who prefer reduced motion
    // or if the image should be loaded eagerly
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || loading === 'eager') {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '200px' // Increased for better pre-loading
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
    
    // Announce error to screen readers
    const errorMessage = `Image ${alt} failed to load`;
    const liveRegion = document.getElementById('image-load-status');
    if (liveRegion) {
      liveRegion.textContent = errorMessage;
    } else {
      // Create a live region if it doesn't exist
      const region = document.createElement('div');
      region.id = 'image-load-status';
      region.className = 'sr-only';
      region.setAttribute('aria-live', 'assertive');
      region.textContent = errorMessage;
      document.body.appendChild(region);
      
      // Clean up after announcement
      setTimeout(() => {
        document.body.removeChild(region);
      }, 3000);
    }
  }, [alt, onError]);

  // Generate a unique ID for ARIA relationships
  const imageId = `lazy-img-${src.split('/').pop()?.replace(/\W/g, '') || Math.random().toString(36).substring(2, 10)}`;

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      // Don't use role="img" on the wrapper as it will conflict with the actual img element
      aria-busy={!isLoaded && !hasError}
    >
      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse"
          aria-hidden="true"
        >
          <img
            src={placeholder}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
            aria-hidden="true"
            width={width || 1}
            height={height || 1}
          />
          <span className="sr-only">Loading image</span>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          role="alert"
          aria-live="polite"
        >
          <span className="text-sm text-gray-500">Image failed to load</span>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          id={imageId}
          src={src}
          alt={alt} // Alt text is required for accessibility
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          width={width || undefined}
          height={height || undefined}
          fetchPriority={fetchPriority}
          decoding={decoding}
          role={role}
          aria-describedby={longdesc ? `desc-${imageId}` : undefined}
          style={hasValidDimensions ? {} : { aspectRatio: '16/9' }} // Provide default aspect ratio if no dimensions
        />
      )}
      
      {/* Long description for complex images */}
      {longdesc && isLoaded && (
        <div id={`desc-${imageId}`} className="sr-only">
          {longdesc}
        </div>
      )}
    </div>
  );
}
