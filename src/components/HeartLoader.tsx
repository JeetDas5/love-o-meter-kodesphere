
import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeartLoaderProps {
  className?: string;
}

const HeartLoader: React.FC<HeartLoaderProps> = ({ className }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Heart 
          className={cn(
            "text-[#FF5C8D] animate-pulse stroke-[2px] fill-[#FF5C8D]/30",
            className
          )} 
          size={48}
        />
        <div className="absolute -top-1 -left-1 w-full h-full">
          <Heart 
            className="text-black stroke-[2px] fill-transparent"
            size={48}
          />
        </div>
      </div>
      <div className="mt-4 text-sm text-black font-bold animate-pulse border-2 border-black bg-white py-2 px-4 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0)]">
        Calculating your love match...
      </div>
    </div>
  );
};

export default HeartLoader;
