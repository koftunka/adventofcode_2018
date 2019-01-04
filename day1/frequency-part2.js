const fs = require("fs");

const stream = fs.readFileSync("./input.txt", "utf8");
const data = stream.split("\n");

const frequencyTracker = new Map();
frequencyTracker.set("0", 1);
let currentFrequency = 0;

let found = false;
function findDuplicate(sequence) {
  return sequence.some(curr => {
    const action = curr.charAt(0);
    const value = parseInt(curr.substring(1, curr.length), 10);
    if (action === "+") {
      currentFrequency += value;
    } else {
      currentFrequency -= value;
    }

    if (frequencyTracker.get(`${currentFrequency}`)) {
      console.log("found match", currentFrequency);
      found = true;
      return true;
    }
    frequencyTracker.set(`${currentFrequency}`, 1);
  });
}

let sequence = data;
while (!found) {
  const res = findDuplicate(sequence);
  if (!res) {
    sequence = sequence.concat(sequence);
  }
}
