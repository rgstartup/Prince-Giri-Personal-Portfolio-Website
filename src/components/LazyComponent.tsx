import { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  fallback?: React.ReactNode;
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
);

// Higher-order component for lazy loading
export function withLazyLoading<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) {
  const LazyComponent = lazy(importFunc);
  
  return function WrappedComponent(props: T & LazyComponentProps) {
    const { fallback, ...componentProps } = props;
    
    return (
      <Suspense fallback={fallback || <LoadingFallback />}>
        <LazyComponent {...(componentProps as T)} />
      </Suspense>
    );
  };
}

// Utility function to create lazy components
export function createLazyComponent<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  fallback?: React.ReactNode
) {
  return withLazyLoading(importFunc)({ fallback } as T & LazyComponentProps);
}
