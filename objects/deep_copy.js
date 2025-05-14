const input = { a: 15, b: 20 };
const dups = JSON.parse(JSON.stringify(input));
// const dups = { ...input };
// const dups = Object.assign({}, input);

dups["a"] = 24;

console.log(input);
console.log(dups);
