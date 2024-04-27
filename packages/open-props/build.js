import fs from 'fs';
import openProps from 'open-props';
const withoutCamelCase = Object.entries(openProps).filter(([key, value]) =>
  key.startsWith('--'),
);
const file = fs.openSync('open-props.json', 'w');
fs.writeSync(file, JSON.stringify(withoutCamelCase));
fs.closeSync(file);
