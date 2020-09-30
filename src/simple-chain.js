const chainMaker = {
  separator: "~~",
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    const isValidInteger = (n) => typeof n === "number" &&
        Number.isInteger(n);
    const index = isValidInteger(position) ? position - 1 : null;
    if (isValidInteger(index) && this.chain[index] !== undefined) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error();
    }

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.chain].join(this.separator);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;