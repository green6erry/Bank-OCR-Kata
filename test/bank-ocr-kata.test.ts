import getFileSections from '../src/getFileSections';


const partialNumberLines = [
  ' _  _  _  _  _  _  _  _  _ ',
  '_| _| _| _| _| _| _| _| _|',
  '|_ |_ |_ |_ |_ |_ |_ |_ |_ ',
  '',
  '_  _  _  _  _  _  _  _  _ ',
  '_ | _ | _ | _ | _ | _ | _ | _ | _ | '
];

const partialNumberLinesResult = [
  [
    ' _  _  _  _  _  _  _  _  _ ',
    '_| _| _| _| _| _| _| _| _|',
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ '
  ]
];
// 
describe('User Story 1', () => {
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('getFileSections: account numbers are being parsed', () => {
    expect(getFileSections(partialNumberLines)).toEqual(partialNumberLinesResult);

  })

  // TODO: Add test about file being found (use all the FS stuff);

});

