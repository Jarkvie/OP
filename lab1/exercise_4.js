`use strict`;

const array = [1,"Hello World",undefined,()=>{},[2,3],true,'2',2,2.3424,()=>{}];
const hash = {};

for(const item of array) {
    const type = typeof item;
    hash[type] = (hash[type] || 0) + 1; 
}

console.dir(hash);