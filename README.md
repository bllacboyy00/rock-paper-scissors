# rock-paper-scissors
# Rock Paper Scissors

I built this game as part of The Odin Project's Foundations course. It runs entirely in the browser console.

## The Project
The goal was to create a game playable against the computer for 5 rounds. I had to figure out how to randomly generate the computer's choice and compare it against the user's input to decide the winner.

## What I Learned
* **Scope matters:** I struggled a bit with where to put my variables. I realized that if I put the score inside the loop, it resets every time, so I had to move it outside.
* **Case Sensitivity:** I learned how to use `.toLowerCase()` to make sure inputs like "ROCK" and "rock" are treated the same way.
* **Loops vs Functions:** This project really helped me understand how to wrap a single round of logic inside a larger `playGame` function to repeat it.

## How to Play
1. Open `index.html` in your browser.
2. Open the DevTools Console (F12).
3. Type `playGame()` and hit Enter to start the match.