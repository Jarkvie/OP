`use strict`

function ipToInt(ip = '126.0.0.1') {
  const octets = ip.split('.');
  const shiftAdd = (acc, octet) => (acc << 8) + parseInt(octet, 10);
  return octets.reduce(shiftAdd, 0);
};
console.log(ipToInt());