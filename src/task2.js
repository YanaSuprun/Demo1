export const checkEnvelope = ({a, b}, {c, d},) => {

  const carverCounting = (a,b,p,q) => {
    const count = b > (2*p*q*a + (p**2 - q**2) * Math.sqrt(p**2 + q**2 - a**2)) / (p**2 + q**2);
    const condition = (p < a && q < b) || (p > a && (count));
    return condition;
  }

  if(carverCounting(a, b, c, d)) {
    return 1;
  } else {
    [a, c] = [c, a];
    [b, d] = [d, b];
    if (carverCounting(a, b, c, d)) {
      return 2
    }
    return 0
  }
};

console.log(checkEnvelope({a: 4, b: 4}, {c: 2, d: 2}))
console.log(checkEnvelope({a: 2, b: 2}, {c: 4, d: 4}))
console.log(checkEnvelope({a: 3, b: 3}, {c: 3, d: 3}))