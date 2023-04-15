import * as fs from 'fs';

export function copy(from: string, to: string) {
  try {
    fs.copyFileSync(from, to);
    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
}