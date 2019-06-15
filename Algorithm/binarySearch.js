function binarySearch(numArray, key) {
  let middleIdx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 7); // true
