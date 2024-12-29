const fibonacciForLoop = (n) => {
  let first = 1;
  let second = 1;

  for (let i = 3; i <= n; i++) {
    let newFibonacci = first + second;
    first = second;
    second = newFibonacci;
  }
  return second;
};

const fibonacciRecursion = (n, first = 0, second = 1) => {
  let newFib = first + second;

  if (n > 1) {
    first = second;
    second = newFib;

    return fibonacciRecursion(--n, first, second);
  } else {
    return second;
  }
};

const fibonacciN = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacciN(n - 1) + fibonacciN(n - 2);
};

console.log(fibonacciForLoop(77));
