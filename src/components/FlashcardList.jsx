// FlashcardList.jsx
import React from 'react';
import Flashcard from './Flashcard';
import "../App.css"; 


export default function FlashcardList({ flashcards }) {
  return (
    <div className="flashcard-list container">
      {flashcards.map((flashcard) => (
        <Flashcard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
}
