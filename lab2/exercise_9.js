`use strict`

const data = [{name:"John",phone:"+380445554433"},
    {name:"Sam",phone:"+380878554433"},
    {name:"BMW",phone:"+380446764433"},
    {name:"ABAMA",phone:"+380785551033"},
    {name:"James",phone:"+380987544330"}];

function findPhoneByName(name) {
    for(const item of data) {
        if(name === item.name) {
            return item.phone;
        }
    }
}
console.log(findPhoneByName("James"));