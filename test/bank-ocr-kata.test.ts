import getFileSections from '../src/getFileSections';
import AccountNumber from '../src/AccountNumber';


const partialNumberLines = [

  ' _  _  _  _  _  _  _  _  _ ',
  '| || || || || || || || || |',
  '|_||_||_||_||_||_||_||_||_|',
  '                           ',
  '  |  |  |  |  |  |  |  |  |',
]

const partialNumberLinesResult = [
  [
    ' _  _  _  _  _  _  _  _  _ ',
    '| || || || || || || || || |',
    '|_||_||_||_||_||_||_||_||_|'
  ],
];

const regularAccountLines = [
  ' _  _  _  _  _  _  _  _  _ ',
  '|_||_||_||_||_||_||_||_||_|',
  '|_||_||_||_||_||_||_||_||_|',
  '                           '
];


describe('User Story 1', () => {

  // TODO: Future test - use FS library to check that the file is being found and ready correctly
  // TODO: Future test - check that an invalid file is not being found and errors gracefully


  test('getFileSections: account numbers are being seperated into 3 lines', () => {
    const result = getFileSections(partialNumberLines);
    expect(result).toEqual(expect.arrayContaining(partialNumberLinesResult));
    // expect(result[1]).not.toBeDefined(); // test is not robust enough, but something to build on later
  });

  test('parseNumber: number is being parsed', () => {
    const account = new AccountNumber([' _ ', '| |', '|_|']);
    expect(account.parseDigit(' _ | ||_|')).toBe(0);
  })

  test('getParsedDigits: see if array is working', () => {
    const account = new AccountNumber(regularAccountLines);
    expect(account.getParsedDigits()).toEqual(expect.arrayContaining([8, 8, 8, 8, 8, 8, 8, 8, 8]));
  });

  test('getAccountNumberOutput: see if correct string', () => {
    const account = new AccountNumber(regularAccountLines);
    expect(account.getAccountNumberOutput()).toEqual('888888888 ERR');
  })

});

describe('User Story 2', () => {
  // TODO: Future test - check what happens with passing in letters
  // TODO: Future test - check with huge numbers



  test('isCheckSumValid: invalid return false', () => {
    const account = new AccountNumber(regularAccountLines);
    expect(account.isCheckSumValid([0, 3, 0, 0, 4, 0, 0, 0])).not.toBeTruthy;
  })

});
describe('User Story 3', () => {
  // TODO: Future test - check that the output string includes ERR or ILL
  // TODO: Future test - pass in a string to throw an error
  // TODO: Future test - pass in an empty array of nulls - new Array(8)
  // TODO: Future test - pass in an 22 number array





  test('parseNonLegal: ', () => {
    const account = new AccountNumber(regularAccountLines);
    expect(account.parseNonLegal([1, 8, 8, 8, -1, 0, 8, 2, 8])).toEqual('1888?0828');
  })

});

