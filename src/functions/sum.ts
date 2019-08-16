
export function sum(a: number, b: number) {
  if(isNaN(a) || isNaN(b)) return 'This is not a number'
  return a + b;
}