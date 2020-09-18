module.exports = class DepthCalculator {
  calculateDepth(arr, result) {
    if(!result) {
      result = 1; 
    }
    arr.forEach(item => {
      if (Array.isArray(item)) {
        result++;
        result = this.calculateDepth(item, result);
      }
    })
    return result;
  }
};