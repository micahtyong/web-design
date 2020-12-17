function averageThreeNumbers(a, b, c) {
  const sum = a + b + c;
  const avg = sum / 3;
  return avg;
}

function createSentence(num, noun) {
  return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Step 1: Generate random values
const x = getRandomNum(20);
const y = getRandomNum(10);
const z = getRandomNum(13);

// Step 2: Compute their average
const avg = averageThreeNumbers(x, y, z);

// Step 3: Formulate our sentence
const sentence = createSentence(avg, "tiger");
console.log(sentence);
