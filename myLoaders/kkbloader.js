module.exports = function (source) {
  console.log(source);

  const result = source.replace("123", "kkk");
  console.log(result);
  return source;
};
