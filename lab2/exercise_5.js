`use strict`;

function rangeOdd(begin = 15,end = 30) {
    var array = [];
    var index = 0;
    while(end >= begin){
        if( begin % 2 === 0){
            ++begin;
        }else {
            array[index] = begin;
            ++begin;
            ++index;
        }

    }
    console.dir(array);
}

rangeOdd();