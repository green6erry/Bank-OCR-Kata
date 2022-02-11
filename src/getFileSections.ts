



// TYPES
// UnparsedAccountEntry
// UnparsedAccountNumberChunk


const hasValidLineLength = (line: string) => line.length === 27

export default function getFileSections(lines: string[]) {

    let entries = [];

    // for loop, skipping every 4 lines
    for (let i = 0; i < lines.length; i += 4) {
        const accountLines = lines.slice(i, i + 3); //first through the an array of 3 strings
        if (accountLines.every(hasValidLineLength)) { // check and make sure has is 27 characters long...
            entries.push(accountLines);
        }
        else {
            //...otherwise, don't include it and alert the user.
            console.error(`the account \n${accountLines.join('\n')} contains an invalid charater`);
        }

    };
    return entries;

}

