export const deepCopy = (obj)=> {
  if (obj === null) {
    return;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}