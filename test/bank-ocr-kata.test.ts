import getFileSections from '../src/getFileSections';


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
// 
describe('User Story 1', () => {
  // TODO: Add test about file being found (use all the FS stuff);


  test('getFileSections: account numbers are being parsed', () => {
    const result = getFileSections(partialNumberLines);
    console.log('result \n', result);
    expect(result).toEqual(expect.arrayContaining(partialNumberLinesResult));
    // expect(result).expect()
    // expect(result[1]).not.toBeDefined();
  })


});

