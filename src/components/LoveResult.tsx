
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoveResultProps {
  percentage: number;
  name1: string;
  name2: string;
  className?: string;
}

const LoveResult: React.FC<LoveResultProps> = ({ 
  percentage, 
  name1, 
  name2, 
  className 
}) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    if (percentage > 0) {
      // Animate the percentage counting up
      const interval = setInterval(() => {
        setDisplayPercentage(prev => {
          if (prev < percentage) {
            return prev + 1;
          }
          clearInterval(interval);
          return percentage;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [percentage]);

  const getMessage = () => {
    if (percentage >= 95) {
      return `${name1} and ${name2}, your love is legendary! A perfect match made in heaven.`;
    } else if (percentage >= 90) {
      return `${name1} and ${name2}, your love is written in the stars! Soulmates, without a doubt.`;
    } else if (percentage >= 85) {
      return `${name1} and ${name2}, your bond is strong and full of passion. A true love story in the making!`;
    } else if (percentage >= 80) {
      return `${name1} and ${name2}, you complement each other beautifully. A deep and meaningful connection!`;
    } else if (percentage >= 75) {
      return `${name1} and ${name2}, yours is a remarkable connection. A beautiful bond!`;
    } else if (percentage >= 70) {
      return `${name1} and ${name2}, your relationship has a solid foundation. Keep nurturing it!`;
    } else if (percentage >= 65) {
      return `${name1} and ${name2}, there’s a spark between you! With effort, this could turn into something special.`;
    } else if (percentage >= 60) {
      return `${name1} and ${name2}, there's promising potential between you. Worth exploring!`;
    } else {
      return `${name1} and ${name2}, perhaps you're better as friends? The chemistry is subtle.`;
    }
};


  const message = getMessage();

  return (
    <div 
      className={cn(
        "result-container flex flex-col items-center", 
        className
      )}
    >
      <div className="flex items-center mb-4">
        <Heart 
          className="text-love fill-love stroke-white mr-2" 
          size={28} 
        />
        <span className="text-xl font-medium text-gray-700">Love Match Result</span>
      </div>
      
      <div className="percentage-container my-4">
        <span className="percentage-digit">{displayPercentage}</span>
        <span className="text-5xl font-bold">%</span>
      </div>
      
      <div className="bg-white/80 rounded-xl p-4 mt-2 shadow-sm border border-gray-100">
        <p className="result-message">{message}</p>
      </div>
    </div>
  );
};

export default LoveResult;
