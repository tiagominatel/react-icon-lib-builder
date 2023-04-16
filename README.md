# react-icon-lib-builder
A simple project to build a reactjs icon library from a  set of svg icons

## Running the project

run `npm install`

Put your svg files at svg folder on root directory

run `npm run build` to generate the react components under `cjs` and `esm` folders

Link or publish the package to use the react components on your react project

The Icons will avaliable individualy with PascalCase versions of the svg files name.

./svg/my-icon.svg can be imported as MyIcon: `import { MyIcon } from 'react-icon-lib-builder`

## Next steps

* Create an <Icon /> component with an icon prop so the icons may be programmatically used eg.: `<Icon icon="MyIcon" />` or `<Icon icon="Star" />`
* Create the Prop variant on the icon components so icon variations as 'outline', 'edge', 'filled' can be used
* Automate the creation of icons variants like 'outline', 'edge', 'filled', etc. from folder strutcture of the svg folder eg.: svg/default/my-icon.svg svg/outlined/my-icon.svg will create only one <MyIcon /> component with the prop variant 'default' | 'outlined'
