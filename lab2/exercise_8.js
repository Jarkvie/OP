`use strict`

function createUser(name,city)  {
    const obj = {"name": name,"city":city};
    return obj;
}

console.log(createUser("John","London"));