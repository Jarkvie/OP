`use strict`

const phoneBook = {"John":"+380445554433",
    "Sam":"+380878554433",
    "BMW":"+380446764433",
    "ABAMA":"+380785551033",
    "James":"+380987544330"}

function findPhoneByName(name) {
    return phoneBook[name];
}

console.log(findPhoneByName("ABAMA"));