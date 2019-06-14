function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7); // [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]

twoSum([40, 11, 19, 17, -12], 28); // [ [ 17, 11 ], [ -12, 40 ] ]
