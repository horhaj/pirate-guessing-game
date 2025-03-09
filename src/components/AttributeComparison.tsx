import React from 'react';
import { AttributeComparison as AttributeComparisonType } from '../utils/gameLogic';
import { Check, X, ArrowUp, ArrowDown, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import BountyDisplay from './BountyDisplay';

interface AttributeComparisonProps {
  comparison: AttributeComparisonType;
  index: number;
  layout?: 'vertical' | 'horizontal';
}

const AttributeComparison: React.FC<AttributeComparisonProps> = ({
  comparison,
  index,
  layout = 'vertical'
}) => {
  const { attribute, value, status } = comparison;
  
  const getBgColor = () => {
    switch (status) {
      case 'correct':
        return 'bg-green-50 border-green-200';
      case 'wrong':
        return 'bg-red-50 border-red-200';
      case 'higher':
      case 'lower':
        return 'bg-amber-50 border-amber-200';
      case 'earlier':
      case 'later':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'correct':
        return 'text-green-700';
      case 'wrong':
        return 'text-red-700';
      case 'higher':
      case 'lower':
        return 'text-amber-700';
      case 'earlier':
      case 'later':
        return 'text-blue-700';
      default:
        return 'text-gray-700';
    }
  };

  const getBadgeClass = () => {
    switch (status) {
      case 'correct':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'wrong':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'higher':
      case 'lower':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'earlier':
      case 'later':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIcon = () => {
    switch (status) {
      case 'correct':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'wrong':
        return <X className="w-5 h-5 text-red-500" />;
      case 'higher':
        return (
          <div className="flex flex-col items-center">
            <ArrowDown className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-medium text-amber-700">Too High</span>
          </div>
        );
      case 'lower':
        return (
          <div className="flex flex-col items-center">
            <ArrowUp className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-medium text-amber-700">Too Low</span>
          </div>
        );
      case 'earlier':
        return (
          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 rotate-[-45deg] text-blue-500" />
            <span className="text-xs font-medium text-blue-700">Earlier</span>
          </div>
        );
      case 'later':
        return (
          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 rotate-45 text-blue-500" />
            <span className="text-xs font-medium text-blue-700">Later</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getDisplayValue = () => {
    if (attribute === 'Bounty') {
      return <BountyDisplay bounty={value as number | null} className={getTextColor()} />;
    }
    if (value === null) return 'Unknown';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return value;
  };

  const getAttributeIcon = () => {
    switch (attribute) {
      case 'Gender':
        return '👤';
      case 'Race':
        return '🌍';
      case 'Bounty':
        return '💰';
      case 'Has Devil Fruit':
        return '🍇';
      case 'Devil Fruit Type':
        return '🔱';
      case 'First Saga':
        return '📚';
      case 'First Arc':
        return '📖';
      case 'Crew':
        return '⚓';
      case 'Status':
        return '❤️';
      case 'Role':
        return '👑';
      default:
        return '📋';
    }
  };

  const delay = index * 100;
  
  if (layout === 'horizontal') {
    return (
      <td 
        className={cn(
          "relative p-4 text-center border-r last:border-r-0", 
          getBgColor()
        )}
        style={{ 
          animationDelay: `${delay}ms`,
          transition: 'all 0.3s ease'
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className={cn("font-semibold", getTextColor())}>
            {getDisplayValue()}
          </div>
          <div className={cn(
            "flex items-center justify-center px-2 py-1 rounded-full text-xs font-semibold",
            getBadgeClass()
          )}>
            {getIcon()}
          </div>
        </div>
      </td>
    );
  }
  
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border mb-2 transition-all animate-slide-up hover:shadow-md", 
        getBgColor()
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{getAttributeIcon()}</span>
        <div>
          <p className="text-sm font-medium text-gray-700">{attribute}</p>
          <div className={cn("text-base font-semibold", getTextColor())}>
            {getDisplayValue()}
          </div>
        </div>
      </div>
      <div className={cn(
        "flex items-center justify-center p-1.5 rounded-full",
        status === 'correct' ? 'bg-green-100' : 
        status === 'wrong' ? 'bg-red-100' :
        status === 'higher' || status === 'lower' ? 'bg-amber-100' :
        'bg-blue-100'
      )}>
        {getIcon()}
      </div>
    </div>
  );
};

export default AttributeComparison;