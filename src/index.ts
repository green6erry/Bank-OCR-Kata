import getFileSections from "./getFileSections";
import { readFileAcountList } from "./readFileAcountList";


// User Story 1 - parse the numbers from a file

// Read in the file
const text = readFileAcountList();
// console.log(text);

// Section the accounts
const sections = getFileSections(text);


console.log(sections);


// Parse the numbers


// Return the file




