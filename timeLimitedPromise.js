//input

var x = 5;

function oneSecondsToExecute() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
}

var oneSecontToExecuteAsync = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

//Solution
function timeLimit(cb, t) {
  return new Promise((res, rej) => {
    cb(x).then((x) => {
      res(x);
    });
    setTimeout(() => {
      rej('failed');
    }, t);
  });
}

//input
function oneSecondsToExecute() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
}

var oneSecontToExecuteAsync = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

timeLimit(oneSecontToExecuteAsync, 10000)
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });
