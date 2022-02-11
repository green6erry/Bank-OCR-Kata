
import { Digits } from "./Digits";
export default class AccountNumber {
    lines: string[];
    rawDigits: string[];
    accountNumberDigits: number[];
    accountNumber: string;

    constructor(lines: string[]) {
        this.lines = lines;
        this.rawDigits = this.getRawDigits();
        this.accountNumberDigits = this.getParsedDigits();
        this.accountNumber = this.getAccountNumber();
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

        return unparsedDigits;

    };

    // putting the digits into an array for now so they'll be easier to test
    getParsedDigits(): number[] {
        const rawDigits = this.getRawDigits();
        const digits = rawDigits.map(rawDigit => this.parseDigit(rawDigit))
        return digits;
    }

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

    // getAccountNumber

    getAccountNumber(): string {
        // add checksum
        const hasValidCheckSum = this.isCheckSumValid(this.accountNumberDigits)

        return `${this.accountNumberDigits.join('')}${hasValidCheckSum ? ' ERR' : ''}`;
    }

    isCheckSumValid = (digits: number[]) => {
        let sum = digits.reduceRight((acc, val, index) => {
            return acc + (val * (index + 1));
        }, 0);
        return !!(sum % 11 === 0);

    }


}