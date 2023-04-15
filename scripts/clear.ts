import * as fs from 'fs';

export function clear(dirs: string[]) {
  for (const dir of dirs) {
    fs.rmSync(dir, { recursive: true, force: true});
  }
}