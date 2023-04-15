import _ from 'lodash';
import { CSSProperties } from 'react';
export type Sizes = 'xs' | 's' | 'base' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export interface IconProps {
  size?: string | number | Sizes;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function getSize(size: string | number) {
  const sizes = Object.keys(sizeMapping);
  if(typeof size === 'string' && sizes.includes(size)) {
    return sizeMapping[size];
  }
  return size;
}

export function formatName(svgName: string) {
  return _.upperFirst(_.camelCase(svgName));
}

export const sizeMapping: Record<string, number> = {
  xs: 4,
  s: 8,
  base: 14,
  m: 18,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64
}
