export class Foo {
  bar() {
    return 'bar'
  }
  
}

export function isCuteNumberGreaterThan10(numbers: number[]): boolean {
  const Evens = evenNumbers(numbers);
  const TheMax = maxNumbers(Evens);
  console.log(TheMax);
  const CuteNumber = isGreateThan10(TheMax);
  console.log(CuteNumber);
  return CuteNumber;
 // return isGreateThan10(maxNumbers(evenNumbers(numbers)));
}
export function evenNumbers(numbers: number[]) : number[]{
  return numbers.filter(number => number % 2 ==0);
}

export function maxNumbers(numbers: number[]): number {
  return Math.max(...numbers);
}
export function isGreateThan10(arg: number): boolean {
  return arg > 10;
}