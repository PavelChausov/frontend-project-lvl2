import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('first test', () => {
  const res = fs.readFileSync(`${__dirname}/../__fixtures__/case_1/res.txt`, 'utf-8');
  const filePath1 = `${__dirname}/../__fixtures__/case_1/file1.json`;
  const filePath2 = `${__dirname}/../__fixtures__/case_1/file2.json`;
  expect(gendiff(filePath1, filePath2)).toEqual(res);
});
