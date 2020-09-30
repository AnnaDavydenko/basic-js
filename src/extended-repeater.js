module.exports = function repeater(str, options) {
  const parseRepeats = (n) => typeof n === "number" && Number.isInteger(n) ? n : 1;
  const parseSeparator = (value, defaultValue) => (value === undefined) ? defaultValue : value;
  const parseStr = (value) => (value === undefined) ? "" : value;

  const strAddition = new Array(parseRepeats(options.additionRepeatTimes))
    .fill(`${parseStr(options.addition)}`).join(`${parseSeparator(options.additionSeparator, "|")}`);

  const result = new Array(parseRepeats(options.repeatTimes))
    .fill(`${parseStr(str)}${strAddition}`).join(`${parseSeparator(options.separator, "+")}`);

  return result;
};