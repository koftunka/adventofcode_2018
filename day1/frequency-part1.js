const fs = require("fs");

const stream = fs.readFileSync("./input.txt", "utf8");
const data = stream.split("\n");

const result = data.reduce((prev, curr) => {
  const action = curr.charAt(0);
  const value = parseInt(curr.substring(1, curr.length), 10);
  console.log(action, value);
  if (action === "+") {
    prev += value;
  } else {
    prev -= value;
  }
  return prev;
}, 0);
console.log(result);
