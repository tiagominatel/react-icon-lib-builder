import * as path from 'path';
import * as fs from 'fs';

import { iconComponentTemplate, iconIndexTemplate } from '../templates';
import { formatName } from '../utils/helpers';

export default async function generateIconComponents(from: string) {
  const iconNames = await fs.promises.readdir(from);
  for (const iconName of iconNames) {
    const componentName = formatName(iconName);
    console.log(__dirname);
    fs.readFile(path.resolve(__dirname, `../svg/${iconName}`), 'utf-8', async function (err, data) {
      if (err) {
        console.log(err);
      }

      const propString = `svg className={className} data-testid="svg-${componentName}" fill={color} width={getSize(size)} height={getSize(size)} style={style}`
      const strComponent = data.replace('svg', propString);

      const component = iconComponentTemplate({ componentName, data: strComponent});
      const indexFile = iconIndexTemplate({ filename: componentName });
      fs.writeFile(
        path.resolve(__dirname, `../src/icon/${componentName}.tsx`),
        component,
        {
          flag: 'w+',
        },
        err => {
          if(err) console.error(err);
        }
      )
      fs.appendFile(
        path.resolve(__dirname, `../src/icon/index.tsx`),
        `${indexFile}\n`,
        err => {
          if(err) console.error(err);
        }
      )
    })
  }
}