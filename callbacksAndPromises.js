let flag = true;

// bad way, call back
function watchMovie(success, reject) {
  if (flag) {
    success({ message: 'Test' }, { secondMessage: 'Test' });
  } else {
    reject('rejected');
  }
}

const success = (x, y) => {
  console.log(x);
  console.log(y);
};

const reject = (x) => {
  console.log(x);
};

watchMovie(success, reject);

//Promises -- 1 (function)
function watchPromiseMovie1() {
  return new Promise((res, rej) => {
    if (flag) {
      res({ message: 'Promise Test', secondMessage: 'Promise Test 2' });
    } else {
      rej('rejected');
    }
  });
}

//Promises -- 2 (function ES6)
const watchPromiseMovie2 = () =>
  new Promise((res, rej) => {
    if (flag) {
      res({ message: 'Promise Test', secondMessage: 'Promise Test 2' });
    } else {
      rej('rejected');
    }
  });

//Promises -- 3 (Object)
const watchPromiseMovie3 = new Promise((res, rej) => {
  if (flag) {
    res({ message: 'Promise Test', secondMessage: 'Promise Test 2' });
  } else {
    rej('rejected');
  }
});

watchPromiseMovie2()
  .then((x) => {
    console.log(x.message);
    console.log(x.secondMessage);
  })
  .catch((x) => {
    console.log(x);
  });

//Async await

async function watchMovieAsync() {
  let data = await watchPromiseMovie2();
  console.log(data);
}

watchMovieAsync();

console.log('runs before all promises');
