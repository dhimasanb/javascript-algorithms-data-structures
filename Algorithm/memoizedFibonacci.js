function memoizedFibonacci(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] =
        memoizedFibonacci(index - 1, cache) +
        memoizedFibonacci(index - 2, cache);
    }
  }

  return cache[index];
}

memoizedFibonacci(1000); // 4.346655768693743e+208
