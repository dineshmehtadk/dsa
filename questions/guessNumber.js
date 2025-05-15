// Initialize weights for numbers 1 to 10 (equal chance)
let weights = Array(10).fill(1);

function guessNumber() {
  // Choose a number based on weights
  const total = weights.reduce((a, b) => a + b, 0);
  const rand = Math.random() * total;
  let sum = 0;
  
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (rand < sum) {
      return i + 1;
    }
  }
}

// Function to train the AI based on feedback
function trainAI(correctNumber) {
  const guessed = guessNumber();
  console.log(`AI guessed: ${guessed}`);

  if (guessed === correctNumber) {
    console.log("Correct guess! 🎉");
    weights[guessed - 1] += 2; // reward correct guess
  } else {
    console.log("Wrong guess. 😢");
    weights[guessed - 1] = Math.max(weights[guessed - 1] - 1, 1); // penalize wrong guess
    weights[correctNumber - 1] += 1; // slightly reward the correct number
  }

  console.log("Updated weights:", weights);
}

// 🔁 Simulate training with correct number = 7
for (let i = 0; i < 20; i++) {
  trainAI(7);
}
