`use strict`;

function changeObj(obj) {
    ++obj.val;
}

const obj = {val:2};
changeObj(obj);
console.dir(obj);

