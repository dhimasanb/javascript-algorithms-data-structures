function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

function getMean(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });

  let mean = sum / arr.length;
  return mean;
}

function getMedian(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    let mid1 = arr[arr.length / 2 - 1];
    let mid2 = arr[arr.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(arr) {
  let modeObj = {};

  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
}

meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]); // { mean: 3.25, median: 3.5, mode: [ '1', '4' ] }

meanMedianMode([9, 10, 23, 10, 23, 9]); //  mean: 14, median: 10, mode: [] }
