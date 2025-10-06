const input = { a: 1, b: 2 };
const dups = input;
// const dups = { ...input };
// const dups = Object.assign({}, input);

dups["a"] = 24;

console.log(input);
console.log(dups);
