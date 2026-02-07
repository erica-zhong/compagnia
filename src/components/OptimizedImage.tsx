import { useState } from 'react';
import type { FC } from 'react';
import './OptimizedImage.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`optimized-image-container ${className}`}>
      {!isLoaded && <div className="skeleton-loader" />}
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;