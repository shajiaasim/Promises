function sleep(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Success');
    }, n);
  });
}

const sleep2 = (n) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('Success');
    }, n);
  });

sleep2(3000).then((x) => {
  console.log(x);
});
