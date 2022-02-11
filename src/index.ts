import AccountNumber from "./AccountNumber";
import getFileSections from "./getFileSections";
import { readFileAcountList } from "./readFileAcountList";


// User Story 1 - parse the numbers from a file

// Read in the file
const text = readFileAcountList();
// console.log(text);

// Section the accounts
const sections = getFileSections(text);


// Parse the numbers in an Account class
const accountList = sections.map(section => new AccountNumber(section));

console.log(accountList);


// Return the file




