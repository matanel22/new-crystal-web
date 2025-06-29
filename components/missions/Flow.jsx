import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function Flow({ value }) {
  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const checkTruncation = () => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  };

  useEffect(() => {
    // Check truncation on mount
    checkTruncation();

    // Add event listener for window resize to recalculate truncation
    window.addEventListener('resize', checkTruncation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkTruncation);
    };
  }, [value]); // Recalculate when 'value' changes

  const handleMouseEnter = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setPopupPosition({
        top: rect.top + window.scrollY - 17, // Adjusted top offset (-17 moves it up)
        left: rect.left + window.scrollX - 50 // Adjusted left offset (-50 moves it to the left)
      });
      setPopupVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="relative  px-4 py-4 truncate text-center"
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTruncated && popupVisible &&
        createPortal(
          <div
            style={{ top: popupPosition.top, left: popupPosition.left }}
            className="absolute rounded-md shadow-lg px-2 py-1 font-medium text-base bg-white z-50"
          >
            {value}
          </div>,
          document.body
        )
      }
      {value}
    </div>
  );
}

export default Flow;
