const fs = require("fs");

const stream = fs.readFileSync("./input.txt", "utf8");
const data = stream.split("\n");

// for each line find if any char appears twice or three times
const matchMap = data.map(line => {
  const occurrences = {};
  let i = 0;
  let l = line.length;
  for (i; i < l; i++) {
    if (!occurrences[line.charAt(i)]) {
      occurrences[line.charAt(i)] = 1;
    } else {
      occurrences[line.charAt(i)] += 1;
    }
  }

  let foundTwo = false;
  let foundTree = false;
  let doubles = 0;
  let triples = 0;

  // console.log(occurrences);

  for (let key in occurrences) {
    if (occurrences[key] === 2 && !foundTwo) {
      foundTwo = true;
      doubles += 1;
    } else if (occurrences[key] === 3 && !foundTree) {
      foundTree = true;
      triples += 1;
    }
  }

  return { doubles, triples };
});

console.log("matchMap", matchMap);

function calculateRepeatedCounts(prev, next) {
  prev.doubles += next.doubles;
  prev.triples += next.triples;
  return prev;
}

const result = { doubles: 0, triples: 0 };
matchMap.reduce(calculateRepeatedCounts, result);

console.log(result);
result.doubles = result.doubles || 1;
result.triples = result.triples || 1;

console.log(result.doubles * result.triples);
