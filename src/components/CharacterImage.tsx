import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface CharacterImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({ 
  src, 
  alt, 
  size = 'medium',
  className
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-28 h-28 md:w-32 md:h-32'
  };

  return (
    <div className={cn(
      "relative overflow-hidden bg-gradient-to-br from-op-blue-50 to-op-blue-100", 
      "rounded-full border-2 shadow-md transition-all duration-300",
      sizeClasses[size],
      className
    )}>
      {(isLoading || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-op-blue-50 to-op-blue-100">
          <User 
            className={cn(
              "text-op-blue-300",
              size === 'small' ? 'w-6 h-6' : 
              size === 'medium' ? 'w-10 h-10' : 
              'w-16 h-16'
            )} 
          />
        </div>
      )}
      
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError ? "hidden" : "block"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

export default CharacterImage;