import {Foo} from '../src/Foo'
import {isCuteNumberGreaterThan10} from "../src/Foo"
describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
})
it('should return cute number given numbers is greater than 10', () => {
  // given numbers
  const numbers = [4, 3, 2, 7, 8, 9, 15, 16, 18, 20];
  // when
  const actual: boolean = isCuteNumberGreaterThan10(numbers);

  // then
  expect(actual).toBeTruthy();


});



