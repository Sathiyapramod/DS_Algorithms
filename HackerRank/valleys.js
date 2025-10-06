/*
DDUUUUDD

lvl = 0
D => lvl = -1 ; valleys = 0
D => lvl = -2 ; v = 0
U => lvl = -1 ; v = 0
U => lvl = 0 ; v = 1
U => lvl = 1 ; v = 
U => lvl = 2
D => lvl = 1
D => lvl = 0

*/

function countValleys(steps, path) {
  let lvl = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path.charAt(i) === "U") {
      lvl++;
      if (lvl === 0) {
        valleys++;
      }
    } else lvl--;
  }
  return valleys;
}
console.log(countValleys(8, "DDUUUUDD"));
console.log(countValleys(8, "UDDDUDUU"));
