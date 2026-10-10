'use strict';

function range(begin = 15,end = 30){
    let array = [];
    let index = 0;
    while(end >= begin){
       array[index] = begin;
       ++begin;
       ++index;
    }
    console.log(array);
}
range();