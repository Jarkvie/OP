'use strict';

function range(begin = 15,end = 30){
    var array = [];
    var index = 0;
    while(end >= begin){
       array[index] = begin;
       ++begin;
       ++index;
    }
    console.dir(array);
}
range();