
import React from 'react';
import { AttributeComparison as AttributeComparisonType } from '../utils/gameLogic';
import { Check, X, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AttributeComparisonProps {
  comparison: AttributeComparisonType;
  index: number;
}

const AttributeComparison: React.FC<AttributeComparisonProps> = ({ comparison, index }) => {
  const { attribute, value, status } = comparison;
  
  const getBgColor = () => {
    switch (status) {
      case 'correct':
        return 'bg-green-50 border-green-200';
      case 'wrong':
        return 'bg-red-50 border-red-200';
      case 'higher':
        return 'bg-amber-50 border-amber-200';
      case 'lower':
        return 'bg-amber-50 border-amber-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIcon = () => {
    switch (status) {
      case 'correct':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'wrong':
        return <X className="w-5 h-5 text-red-500" />;
      case 'higher':
        return <ArrowDown className="w-5 h-5 text-amber-500" />;
      case 'lower':
        return <ArrowUp className="w-5 h-5 text-amber-500" />;
      default:
        return null;
    }
  };

  const getDisplayValue = () => {
    if (value === null) return 'Unknown';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return value;
  };

  const delay = index * 100;
  
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border mb-2 transition-all animate-slide-up", 
        getBgColor()
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div>
        <p className="text-sm font-medium text-gray-700">{attribute}</p>
        <p className="text-base font-semibold">{getDisplayValue()}</p>
      </div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
        {getIcon()}
      </div>
    </div>
  );
};

export default AttributeComparison;
