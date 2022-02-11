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


// 
describe('User Story 1', () => {
  // TODO: Add test about file being found (use all the FS stuff);


  test('getFileSections: account numbers are being seperated into 3 lines', () => {
    const result = getFileSections(partialNumberLines);
    expect(result).toEqual(expect.arrayContaining(partialNumberLinesResult));
    // expect(result).expect()
    // expect(result[1]).not.toBeDefined();
  });

  test('parseNumber: number is being parsed', () => {
    const account = new AccountNumber([' _ ', '| |', '|_|']);
    expect(account.parseDigit(' _ | ||_|')).toBe(0);
  })

  test('getParsedDigits: see if array is working', () => {
    const account = new AccountNumber(regularAccountLines);
    expect(account.getParsedDigits()).toEqual(expect.arrayContaining([8, 8, 8, 8, 8, 8, 8, 8, 8]));
  })

});

