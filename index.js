function findMatching(drivers, string) {
  const result = drivers.filter(
    (driver) => driver.toUpperCase() === string.toUpperCase()
  );
  return result;
}

function fuzzyMatch(drivers, string) {
  let sLength = string.length;
  const result = drivers.filter(
    (driver) => driver.slice(0, sLength) === string
  );
  return result;
}

function matchName(drivers, string) {
  const result = drivers.filter((driver) => driver.name === string);
  return result;
}
