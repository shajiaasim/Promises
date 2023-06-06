function createCounter(n) {
  return function () {
    return n++;
  };
}

var createCounterES6 = (n) => () => n++;

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter());
console.log(counter());
console.log(counter());

const counterES6 = createCounterES6(10);
console.log(counterES6()); // 10
console.log(counterES6());
console.log(counterES6());
console.log(counterES6());
