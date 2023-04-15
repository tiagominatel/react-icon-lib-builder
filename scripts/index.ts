import { clear } from './clear';
import { copy } from './copy';
import generateIconComponents from './iconScript';

async function generate() {
  clear(['src/icon', 'src/urils', 'cjs', 'esm']);
  copy('utils/helpers.ts', 'src/utils/helpers.ts');
  await generateIconComponents('svg'); 
}

generate();
