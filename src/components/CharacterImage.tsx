
import React from 'react';
import { cn } from '@/lib/utils';

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
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-28 h-28'
  };

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden border-2 border-op-gold-400 shadow-md", 
      sizeClasses[size],
      className
    )}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a placeholder if image doesn't load
          (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
        }}
      />
    </div>
  );
};

export default CharacterImage;
