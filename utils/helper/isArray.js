const isArray = (checkVar, init) => {
  if (typeof checkVar === "object") {
    return checkVar;
  } else if (!isNaN(checkVar)) {
    init.push(checkVar);
    return init;
  } else {
    return init;
  }
};

export default isArray;
