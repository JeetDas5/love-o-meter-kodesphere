import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import HeartLoader from "@/components/HeartLoader";
import LoveResult from "@/components/LoveResult";

const Index = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [matchPercentage, setMatchPercentage] = useState<number | null>(null);
  const [inputFocus, setInputFocus] = useState<"name1" | "name2" | null>(null);
  const [calculatedName1, setCalculatedName1] = useState("");
  const [calculatedName2, setCalculatedName2] = useState("");

  const calculateLoveMatch = () => {
    if (!name1.trim() || !name2.trim()) {
      toast.error("Please enter both names to calculate your love match");
      return;
    }

    setIsCalculating(true);
    setMatchPercentage(null);

    // Simulate loading time
    const calculationTime = 2000 + Math.random() * 1000;

    setTimeout(() => {
      // Love match algorithm
      const combinedNames = (name1 + name2).toLowerCase();
      let sum = 0;

      // Sum of ASCII values + a bit of randomness but maintain consistency
      for (let i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i);
      }

      // Create a seeded random value based on the names
      const seed = sum % 100;
      let result = seed;

      // Add some variation based on string lengths
      result = (result + ((name1.length * name2.length) % 20)) % 101;

      // Ensure very short names don't get unfairly low scores
      if (combinedNames.length < 8 && result < 20) {
        result += 20;
      }

      //If result is less than 50, display any random number between 60 and 65
      if (result < 60) {
        result = Math.floor(Math.random() * 6) + 60;
      }

      //If result is between 50 and 60, display any random number between 65 and 70
      if (result >= 50 && result < 60) {
        result = Math.floor(Math.random() * 6) + 65;
      }

      // Limit to 0-100 range
      result = Math.max(0, Math.min(100, result));

      setMatchPercentage(Math.floor(result));
      setCalculatedName1(name1);
      setCalculatedName2(name2);
      setIsCalculating(false);
    }, calculationTime);
  };

  const resetCalculator = () => {
    setName1("");
    setName2("");
    setMatchPercentage(null);
    setCalculatedName1("");
    setCalculatedName2("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isCalculating && name1.trim() && name2.trim()) {
      calculateLoveMatch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF4E3] px-4 py-12">
      <div className="w-full max-w-md mx-auto">
        <div className="animate-fade-in text-center mb-8">
          <div className="neu-badge mb-4">Love Calculator</div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-2">
            Match Made in Heaven?
          </h1>
          <p className="text-black font-medium max-w-sm mx-auto">
            Enter two names to discover your love compatibility and see if the
            stars align for you.
          </p>
        </div>

        <div className="neu-container rounded-md p-6 sm:p-8 mx-auto mb-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name1"
                className={`input-label ${
                  inputFocus === "name1" ? "text-[#FF5C8D]" : ""
                }`}
              >
                Your Name
              </label>
              <input
                id="name1"
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                onFocus={() => setInputFocus("name1")}
                onBlur={() => setInputFocus(null)}
                onKeyPress={handleKeyPress}
                className="input-field"
                placeholder="Enter your name"
                disabled={isCalculating}
              />
            </div>

            <div>
              <label
                htmlFor="name2"
                className={`input-label ${
                  inputFocus === "name2" ? "text-[#FF5C8D]" : ""
                }`}
              >
                Your Crush's Name
              </label>
              <input
                id="name2"
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                onFocus={() => setInputFocus("name2")}
                onBlur={() => setInputFocus(null)}
                onKeyPress={handleKeyPress}
                className="input-field"
                placeholder="Enter your crush's name"
                disabled={isCalculating}
              />
            </div>

            <button
              onClick={calculateLoveMatch}
              disabled={isCalculating || !name1.trim() || !name2.trim()}
              className={`btn-calculate ${
                !name1.trim() || !name2.trim()
                  ? "opacity-70 cursor-not-allowed"
                  : ""
              }`}
            >
              Calculate Love Match
            </button>
          </div>
        </div>

        {isCalculating && (
          <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
            <HeartLoader />
          </div>
        )}

        {!isCalculating && matchPercentage !== null && (
          <>
            <LoveResult
              percentage={matchPercentage}
              name1={calculatedName1}
              name2={calculatedName2}
            />

            <button
              onClick={resetCalculator}
              className="mt-6 bg-white border-2 border-black rounded px-4 py-2 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-200 active:translate-y-1 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)]"
            >
              Try another match
            </button>
          </>
        )}
      </div>

      <footer className="mt-auto pt-8 text-center text-black text-sm font-medium">
        <p>
          Made with love ❤️ by Konnexions KIIT • Results are for entertainment
          purposes only
        </p>
      </footer>
    </div>
  );
};

export default Index;
