# Guess The Number

A simple React number guessing game built with Vite and Tailwind CSS.

The app generates a random number between `1` and `100`, lets the player submit guesses, and gives instant feedback for each attempt until the correct number is found.

## Features

- Random secret number generation for every new game
- Input validation for guesses outside the `1-100` range
- Attempt counter
- High/low feedback after each guess
- Restart flow with `Play Again`
- Glassmorphism-style card UI with a fullscreen background image

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- ESLint 9

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually `http://localhost:5173`.


## How To Play

1. Start the app.
2. Enter a number between `1` and `100`.
3. Submit your guess.
4. Read the hint:
   - `Too high` means guess lower
   - `Too low` means guess higher
5. Keep guessing until you find the correct number.
6. Click `Play Again` to start a new round.


## Main Logic

The core game logic lives in `src/App.jsx`:

- `startNewGame()` creates a new random target number and resets the game state
- `handleGuess()` validates input, increments attempts, and updates the feedback message
- `useEffect()` starts a new game when the component first loads

## Notes

- The background image is referenced directly in the main container using Tailwind's arbitrary value syntax.
- Tailwind CSS is imported in `src/index.css` using `@import "tailwindcss";`.
