import { sum, divide, isPrime } from './math'


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(1+2);
});

describe('for divide func', () => {
    test('throw error if 0', () => {
        expect(() => divide(2, 0)).toThrow();
        expect(() => divide(2, 0)).toThrow('Unable to divide by 0');
    });
    test('divide 10/2', () => {
        expect(divide(10, 2)).toEqual(5)
    })
});

describe('for prime tests', () => {
    const value1 = [-10, -1, 0, -0, 1];
    value1.forEach(value => {
        test(`less than or equal to 1, value: ${value}`, () => {
            expect(isPrime(value)).toBeFalsy();
        });
    });

    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    primes.forEach(prime => {
        test(`this number is prime: ${prime}`, () => {
            expect(isPrime(prime)).toBeTruthy();
        })
    });

    const notPrimes = [4, 6, 600, 1000000];
    notPrimes.forEach(notPrime => {
        test(`this number is NOT prime: ${notPrime}`, () => {
            expect(isPrime(notPrime)).toBeFalsy();
        })
    });

});