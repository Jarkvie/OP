`use strict`;

function rangeOdd(begin = 15,end = 30) {
    const array = [];
    let index = 0;
    while(end >= begin){
        if( begin % 2 === 0){
            ++begin;
        }else {
            array[index] = begin;
            ++begin;
            ++index;
        }

    }
    console.log(array);
}

rangeOdd();