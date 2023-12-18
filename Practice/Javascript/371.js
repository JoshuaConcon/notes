var getBinaryManually = function(num) {
  let binary = '';
  let remainder;
  let current = num;
  while(current !== 0) {
    remainder = current % 2;
    binary = remainder + binary;
    current = Math.floor(current/2);
  }
  return binary;
}

var getBinaryWithJS = function(num) {
  return (num >>> 0).toString(2)
}

var lengthenBinaryString = function(bin, targetSize) {
  binStringLength = bin.length;
  targetToBinaryDiff = targetSize - binStringLength;
  return
} 

var BinaryMath = function(binA, binB) {
  // find the sizes of the binary strings
  // make them both the same size
  // loop from end of list to front
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
};

console.log(getBinaryManually(19))
console.log(getBinaryManually(21))