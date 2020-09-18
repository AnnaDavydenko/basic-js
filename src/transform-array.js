module.exports = function transform(arr) {
  const obj = {
    "--double-next": (index, result, arr) => {
      if (index !== arr.length - 1) {
        const next = arr[index + 1];
        result.push(next);
      }
    },
    "--double-prev": (index, result, arr) => {
      if (index !== 0) {
        const prev = arr[index - 1];
        result.push(prev);
      }
    },
  }

  if (!Array.isArray(arr)) {
    throw new Error("THROWN");
  }

  if (!arr.length) {
    return [];
  }

  const seq = ["--double-next", "--double-prev", "--discard-prev", "--discard-next"];

  if (!arr.filter(item => !seq.includes(item)).length) {
    return [];
  }

  const result = [];
  arr.forEach((item, index) => {
    const next = arr[index + 1];
    const prev = arr[index - 1];
    const beforePrev = arr[index - 2];
    if (!seq.includes(item) && next !== "--discard-prev" && prev !== "--discard-next") {
      result.push(item);
    } else if (Object.keys(obj).includes(item) && (beforePrev !== "--discard-next" || item !== "--double-prev")) {
      obj[item](index, result, arr);
    }
  })
  return result;
};