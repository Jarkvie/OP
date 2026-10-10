`use strict` 

function generateKey(length, possible){
  const line = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    key += possible[Math.floor(Math.random() * line)];
  }
  return key;
};

console.log(generateKey(50,"chatacterabccknfsfnsdf"))