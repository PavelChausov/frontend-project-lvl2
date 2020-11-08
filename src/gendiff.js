import fs from 'fs';
import _ from 'lodash';

const gendiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(filepath1));
  const file2 = JSON.parse(fs.readFileSync(filepath2));
  const diffs = [..._.toPairs(file1), ..._.toPairs(file2)]
    .sort(([key1], [key2]) => {
      if (key1 > key2) {
        return 1;
      }
      if (key1 < key2) {
        return -1;
      }
      return 0;
    })
    .map(([key, value]) => {
      if (file1[key] === value && file2[key] !== value) {
        return [key, value, '-'];
      }
      if (file1[key] !== value && file2[key] === value) {
        return [key, value, '+'];
      }
      return [key, value, ' '];
    });
  const uniq = _.uniqWith(diffs, _.isEqual);
  const res = [
    '{',
    ...uniq.map(([key, value, sign]) => `  ${sign} ${key} ${value}`),
    '}',
  ].join('\n');
  return res;
};

export default gendiff;
