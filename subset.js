let n = userInput[0].split(" ")[0],
  m = userInput[0].split(" ")[1];

let parentArr;
let subsetArr;

if (n > m) {
  parentArr = userInput[1].split(" ").map(Number);
  subsetArr = userInput[2].split(" ").map(Number);
} else {
  parentArr = userInput[2].split(" ").map(Number);
  subsetArr = userInput[1].split(" ").map(Number);
}

let flag = subsetArr.every((element) => {
  return parentArr.includes(element);
});

flag ? console.log("yes") : console.log("no");
