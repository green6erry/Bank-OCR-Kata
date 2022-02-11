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


  // Parse the numbers in an Account class, just collecting the account number
  const accountList = sections.map(section => new AccountNumber(section).getAccountNumber());

  // Put it all together into a string
  const accountListOutput = accountList.join('\n');

  return accountListOutput;


}
main();



// Return the file




