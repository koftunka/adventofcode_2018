const fs = require("fs");

const stream = fs.readFileSync("./input.txt", "utf8");
const data = stream.split("\n");

// for each line find if any char appears twice or three times

const results = [];

const matchMap = data.map((currentLine, lineIndex) => {
  if (lineIndex >= data.length - 1) {
    return;
  }
  // for each following line
  for (let i = lineIndex + 1; i < data.length; i += 1) {
    // compare lines char by char to determine if
    // 2 lines have more than 1 char different
    let charIndex;
    let lineToCompareWith = data[i];
    let diff = 0;
    let diffChars = [];
    let matched = "";
    for (charIndex = 0; charIndex < currentLine.length; charIndex++) {
      const a = currentLine.charAt(charIndex);
      const b = lineToCompareWith.charAt(charIndex);
      if (a !== b) {
        diff += 1;
        diffChars.push(a, b);
        matched =
          currentLine.substring(0, charIndex) +
          currentLine.substring(charIndex + 1, currentLine.length);
      }
      if (diff > 1) {
        break;
      }
    }
    if (diff < 2) {
      results.push({ currentLine, lineToCompareWith, diffChars, matched });
    }
  }
});

console.log("matchMap", results);
