module.exports = function check(str, bracketsConfig) {
  const parsedBracketsConfig = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });

  let prevLength = str.length;

  while (str.length) {
    parsedBracketsConfig.forEach((item) => {
      str = str.replaceAll(item, "");
    });

    if (str.length === prevLength) {
      return false;
    }

    prevLength = str.length;
  }

  return true;
}