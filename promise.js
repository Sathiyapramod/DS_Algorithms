var first = new Promise(function (resolve, reject) {
  let a = 1,
    b = 2;
  if (a < b) resolve("success");
  else reject("Failed");
});

first.then((result) => console.log(result)).catch((err) => console.error(err));
