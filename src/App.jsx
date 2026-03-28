import React, { useState, useEffect } from 'react';

const GuessNumberGame = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Start guessing...');
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Initialize game
  const startNewGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Enter a number between 1 and 100');
    setAttempts(0);
    setIsGameOver(false);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess);

    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numGuess === targetNumber) {
      setMessage(`🎉 Correct! It was ${targetNumber}.`);
      setIsGameOver(true);
    } else if (numGuess > targetNumber) {
      setMessage('📈 Too high! Try a lower number.');
    } else {
      setMessage('📉 Too low! Try a higher number.');
    }
    setGuess('');
  };

  return (
<div className="min-h-screen bg-[url('/bga.jpg')] bg-cover bg-center flex items-center justify-center p-4">      <div className="max-w-md w-full rounded-2xl bg-transparent backdrop-blur-md shadow-2xl p-8 border border-slate-700 text-center">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Guess The Number</h1>
        <p className="text-slate-700 mb-6">Can you find the secret number?</p>

        <div className="bg-slate-700 rounded-lg py-4 px-2 mb-6">
          <p className={`text-lg font-medium ${isGameOver ? 'text-green-400 animate-bounce' : 'text-slate-200'}`}>
            {message}
          </p>
          <p className="text-sm text-slate-200 mt-2">Attempts: {attempts}</p>
        </div>

        {!isGameOver ? (
          <form onSubmit={handleGuess} className="space-y-4">
            <input
            
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="??"
              className="w-full  border-2 border-slate-600 rounded-xl px-4 py-3 text-2xl text-center focus:border-indigo-500 focus:outline-none transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 rounded-xl transition-all active:scale-95"
            >
              Submit Guess
            </button>
          </form>
        ) : (
          <button
            onClick={startNewGame}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-900/20"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default GuessNumberGame;