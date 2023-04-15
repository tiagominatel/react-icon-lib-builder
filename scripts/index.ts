import { clear } from './clear';
import { copy } from './copy';
import generateIconComponents from './iconScript';

async function generate() {
  // clear(['src/icon', 'src/urils']);
  copy('utils/helpers.ts', 'src/utils/helpers.ts');
  await generateIconComponents('svg'); 
}

generate();
