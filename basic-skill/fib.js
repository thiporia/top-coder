{
  function fib(a) {
    if (a <= 1) return 1;
    return fib(a - 1) + fib( a - 2);
  }

  console.log(fib(1));
  console.log(fib(4));
  console.log(fib(10));
}
