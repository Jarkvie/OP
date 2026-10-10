`use strict`

function random(min, max)  {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  
  if(max<min) {
    let temp = min;
    min = max;
    max = temp;
  }

  const range = max - min + 1;
  return min + Math.floor(Math.random() * range);
}

console.log(random(25,10));

