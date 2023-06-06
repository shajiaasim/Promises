function createCounter(n) {
  var a = n;
  function increment() {
    return (a = a + 1);
  }
  function decrement() {
    return (a = a - 1);
  }
  function reset() {
    a = n;
    return n;
  }

  return { increment, decrement, reset };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
