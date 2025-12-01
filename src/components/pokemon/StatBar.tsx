import React from "react";

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
}

export const StatBar: React.FC<StatBarProps> = ({
  label,
  value,
  max = 100,
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-700 w-24">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-600">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gray-900 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};
