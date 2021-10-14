const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function isNumber(number) {
  if (parseInt(number) in num) return true;
  else return false;
}
