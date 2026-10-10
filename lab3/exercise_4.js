`use strict`

const obj = {m0:1,m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
}};

function introspect(iface) {
  const output = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      output.push([key, fn.length]);
    }
  }
  return output;
}

console.log(introspect(obj));