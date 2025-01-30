/*
Write a function to fetch a value from an object using a string key path (e.g., fn(obj, "user.details.name")).
*/

function fetchData(obj, keyName) {
    if (keyName === "") return -1;
    if (Object.keys(obj).length === 0) return -1;

    const keys = keyName.split(".");
    let curr = obj;

    for (let key of keys) {
        if (curr[key] !== undefined) {
            curr = curr[key];
        } else return -1;
    }
    console.log(curr);
}

fetchData(
    {
        user: {
            details: {
                name: "john",
                last: "doe",
            },
            status: false,
        },
    },
    "user.details.name"
);
