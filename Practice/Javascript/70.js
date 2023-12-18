var waysToGetToIndex = function(cacheArray, index) {
  let result;
  if(index === 0 || index === 1) {
    result = index+1
  } else {
    result = cacheArray[index-1] + cacheArray[index-2]
  }
  return result;
};

var arrayApproach = function(n) {
  const cacheArray = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    cacheArray[i] = waysToGetToIndex(cacheArray, i);
  };
  return cacheArray[n-1]
}

var getNextValueAndMutate = function(cacheTuple) {
  const nextValue = cacheTuple[0] + cacheTuple[1];
  const result = [cacheTuple[1], nextValue];
  return result;
}

var tupleApproach = function(n) {
  if(n === 1) {
    return 1
  }
  let cacheTuple = [1,2];
  for (let i = 2; i < n; i++) {
    cacheTuple = getNextValueAndMutate(cacheTuple);
  }
  return cacheTuple[1]
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // return arrayApproach(n);
  return tupleApproach(n);
};