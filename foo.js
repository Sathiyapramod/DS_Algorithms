const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => {
        if (!response) throw new Error("error");
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

readFile("./data.json")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
