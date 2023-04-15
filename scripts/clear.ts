import * as fs from 'fs';

export function clear(dirs: string[]) {
  dirs.forEach((dir) => {
    fs.rmSync(dir, { recursive: true, force: true});
  })
}