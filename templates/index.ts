import { iconData } from '../iconData/iconData';

export interface IconComponentTemplateParams {
  componentName: string;
  data: string;
}

export interface IconIndexTemplateParams {
  filename: string;
}

export function iconComponentTemplate({ componentName, data }: IconComponentTemplateParams) {
  const component = `
  import * as React from 'react';
  import { IconProps, getSize } from '../utils/helpers';

  function ${componentName}({ size = "${iconData.size}", color = "${iconData.color}", className, style}: IconProps) {
    return (${data});
  };

  export default ${componentName}
  `
  return (component);
}

export function iconIndexTemplate({ filename }: IconIndexTemplateParams) {
  const indexContent = `export { default as ${filename} } from './${filename}';`;
  return (indexContent);
}