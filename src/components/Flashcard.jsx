import React, { useState, useEffect, useRef } from 'react';
import "../app.css"; 


export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current?.getBoundingClientRect().height || 100;
    const backHeight = backEl.current?.getBoundingClientRect().height || 100;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(() => {
    if (flashcard) {
      setMaxHeight();
    }
  }, [flashcard?.question, flashcard?.answer, flashcard?.options]);

  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);

  if (!flashcard) {
    return null; // Optionally, return a placeholder or error message.
  }

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
      role="button"
      aria-expanded={flip}
    >
      <div className="front" ref={frontEl} aria-hidden={flip}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options?.map((option, index) => (
            <div className="flashcard-option" key={index}>
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="back" ref={backEl} aria-hidden={!flip}>
        {flashcard.answer}
      </div>
    </div>
  );
}
