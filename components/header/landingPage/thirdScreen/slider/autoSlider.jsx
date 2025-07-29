"use client"
import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const AutoSlider = ({ children, autoScrollInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Determine the number of cards based on children
  const cardCount = children ? children.length : 0;

  // Auto-scroll effect
  useEffect(() => {
    if (cardCount > 0 && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
      }, autoScrollInterval);

      return () => clearInterval(intervalRef.current);
    }
  }, [cardCount, autoScrollInterval, isPaused]);

  // Handle manual navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cardCount - 1 : prevIndex - 1
    );
    resetAutoScroll();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoScrollInterval * 2);
  };

  // Handle touch events for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {children}
      </div>

      {/* Navigation buttons */}
      {cardCount > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicator dots */}
      {cardCount > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: cardCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetAutoScroll();
              }}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSlider;