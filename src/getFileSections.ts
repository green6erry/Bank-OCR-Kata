



// TYPES
// UnparsedAccountEntry
// UnparsedAccountNumberChunk


const hasValidLineLength = (line: string) => line.length === 27

export default function getFileSections(lines: string[]): string[][] {

    let entries = [];

    // for loop, skipping every 4 lines
    for (let i = 0; i < lines.length; i += 4) {
        if (lines.length > i + 3) {
            const accountLines = lines.slice(i, i + 3); //first through the an array of 3 strings
            console.log('accountLines length', accountLines.length);
            entries.push(accountLines);
            if (accountLines.every(hasValidLineLength)) { // check and make sure has is 27 characters long...
                entries.push(accountLines);
            }
            //(TODO: see why there's an invalid character. Commented out for now.)
            else {
                //...otherwise, don't include it and alert the user.
                console.error(`the account \n${accountLines.join('\n')} contains an invalid charater`);
            }
        }

    };
    return entries;

}

