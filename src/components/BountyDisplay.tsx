import React from 'react';
import { cn } from '@/lib/utils';

export const formatBountyValue = (bounty: number | null): string => {
  if (bounty === null) return 'Unknown';
  
  if (bounty >= 1000000000) {
    return (bounty / 1000000000).toFixed(bounty % 1000000000 ? 1 : 0) + 'B';
  } else if (bounty >= 1000000) {
    return (bounty / 1000000).toFixed(bounty % 1000000 ? 1 : 0) + 'M';
  } else if (bounty >= 1000) {
    return (bounty / 1000).toFixed(bounty % 1000 ? 1 : 0) + 'K';
  } else {
    return bounty.toString();
  }
};

const BerrySymbol: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAABxSURBVDhPvdFLDoAwCARQ6v3vrAzpNLMApSb6NiJaPumwG6eboQ2H5xFvCfzMn1q0uio7VKJlVY10tBXsHFpwCBhH0kXSIX63A7FKhiO1O6TFkATGkZzig9ve4ZuLg/QeVFXkpx2UjpLNXXZ4XLLH7AIgHE/p1FqccwAAAABJRU5ErkJggg=="
    width="12" 
    height="20" 
    className={className}
    alt="Berry symbol"
  />
);

interface BountyDisplayProps {
  bounty: number | null;
  className?: string;
}

const BountyDisplay: React.FC<BountyDisplayProps> = ({ bounty, className }) => {
  const formattedValue = formatBountyValue(bounty);
  
  if (bounty === null) return <span className={className}>Unknown</span>;
  
  return (
    <span className={cn("flex items-center", className)}>
      <BerrySymbol className="mr-1" />
      <span>{formattedValue}</span>
    </span>
  );
};

export default BountyDisplay;