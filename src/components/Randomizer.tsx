'use client'
import { useState, useEffect } from "react";

const randomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

interface RandomTextProps {
  page: string;
}

const Randomizer: React.FC<RandomTextProps> = ({ page }) => {
  const [text, setText] = useState(page.split("").map(() => randomLetter()));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSettling, setIsSettling] = useState(false);

  useEffect(() => {
    let randomizeInterval: NodeJS.Timeout;
    let settleInterval: NodeJS.Timeout;
    let initialTimeout: NodeJS.Timeout;

    if (!isSettling) {
      // Randomization Phase
      randomizeInterval = setInterval(() => {
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? page[index] : randomLetter()
          )
        );
      }, 100);

      initialTimeout = setTimeout(() => {
        clearInterval(randomizeInterval);
        setIsSettling(true);
        setCurrentIndex(0);
      }, 2000);
    } else {
      // Settling Phase
      settleInterval = setInterval(() => {
        setText((prevText) => {
          const newText = [...prevText];
          newText[currentIndex] = page[currentIndex];
          return newText;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === page.length) {
          clearInterval(settleInterval);
        }
      }, 500);

      // After randomization
      setTimeout(() => {
        clearInterval(settleInterval);
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? page[index] : randomLetter()
          )
        );
        const finalSettleInterval = setInterval(() => {
          setText((prevText) => {
            const newText = [...prevText];
            newText[currentIndex] = page[currentIndex];
            return newText;
          });
          setCurrentIndex((prevIndex) => prevIndex + 1);
          if (currentIndex === page.length) {
            clearInterval(finalSettleInterval);
          }
        }, 500);
      }, 1000);
    }

    return () => {
      clearInterval(randomizeInterval);
      clearInterval(settleInterval);
      clearTimeout(initialTimeout);
    };
  }, [isSettling, currentIndex, page]);

  return <span>{page}</span>;
};

export default Randomizer;