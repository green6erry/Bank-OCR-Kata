
import { Digits } from "./Digits";
export default class AccountNumber {
    lines: string[];
    rawDigits: string[];



    constructor(lines: string[]) {
        this.lines = lines;
        this.rawDigits = this.getRawDigits();
    }

    // get rawDigits
    getRawDigits(): string[] {
        let top = this.lines[0].match(/.{1,3}/g) ?? [];
        const middle = this.lines[1].match(/.{1,3}/g) ?? [];
        const bottom = this.lines[2].match(/.{1,3}/g) ?? [];

        let unparsedDigits = new Array(9);
        for (let i = 0; i < unparsedDigits.length; i++) {
            unparsedDigits[i] = top[i] + middle[i] + bottom[i];
        }

        // console.log('unparsedDigits', unparsedDigits);
        console.log('does work? %s is output from', this.parseDigit(unparsedDigits[0]), unparsedDigits[0]);
        return unparsedDigits

    };

    // parseRawDigits
    parseDigit(str: string): number {
        const { ZERO,
            ONE,
            TWO,
            THREE,
            FOUR,
            FIVE,
            SIX,
            SEVEN,
            EIGHT,
            NINE, } = Digits;
        switch (str) {
            case ZERO: return 0;
            case ONE: return 1;
            case TWO: return 2;
            case THREE: return 3;
            case FOUR: return 4;
            case FIVE: return 5;
            case SIX: return 6;
            case SEVEN: return 7;
            case EIGHT: return 8;
            case NINE: return 9;
            default: return -1; // easier to change this to a question mark later
        }


    }

    // setAccountNumber (or soemthing)
}