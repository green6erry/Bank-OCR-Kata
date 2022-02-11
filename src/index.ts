import AccountNumber from "./AccountNumber";
import getFileSections from "./getFileSections";
import { readFileAcountList } from "./readFileAcountList";

export function main() {
  // User Story 1 - parse the numbers from a file

  // Read in the file
  const text = readFileAcountList();
  // console.log(text);

  // Section the potential accounts
  const sections = getFileSections(text);


  // Parse the numbers in an Account class
  const accountList = sections.map(section => new AccountNumber(section));


  return accountList;


}
main();



// Return the file




