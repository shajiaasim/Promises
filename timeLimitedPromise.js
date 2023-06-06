//Output
function timeLimit(fn, t) {
  return new Promise((res, rej) => {
    fn().then(() => {
      res();
    });
    setTimeout(() => {
      rej('failed');
    }, t);
  });
}

//input
function fiveSecondsToExecute() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Done');
    }, 5000);
  });
}

//
// var oneSecontToExecute = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//   return n * n;
// };

timeLimit(fiveSecondsToExecute(), 10000)
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });
