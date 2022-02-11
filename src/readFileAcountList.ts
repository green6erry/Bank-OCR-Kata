
import { readFileSync } from 'fs';
import * as path from 'path';


export async function readFileAcountList() {

  const ROOT = process.env.PWD!;

  const inputFilePath = process.argv[2] ?? './test/data/test_data_1.txt';

  // This would be more relevant if the process.arg were required.
  if (!inputFilePath) {
    throw new Error('Please provide a text file to read');
  }

  // TODO - check that the file exists with FS method
  // TODO - make sure that it certain file type (like restrain the accepted files to '.txt')
  const inputFile = path.resolve(ROOT, inputFilePath);

  // Read contents of file into memory.
  const fileContents = readFileSync(inputFile, { encoding: "utf8" });

  // TODO: add writing to output file. But for now, we console.log!
  console.log(fileContents)
}
