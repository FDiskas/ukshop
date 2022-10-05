## What's included

The following improvements was done on top of pure nextjs

1. Added prettier
1. Added stylelint
1. Added typescript plugin to understand module scss
1. Added recommended settings and plugins for VSCode
1. Added jest test runner
1. Improved eslint
1. Integrated prettier with eslint
1. Integrated prettier with stylelint
1. Configured nextjs to understand scss
1. Configured typescript to understand css modules
1. Configured tailwind css
1. Automatically fetch API type definitions from swagger after installing node modules

> This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and added some candies :)

## How to

**Requirements:** Node and yarn (works with bunjs also)

**Development**

1. `yarn` to install dependencies
1. `yarn lint` check if all required modules is installed and code has no issues
1. `yarn dev` to start local development

**Production**

1. `yarn install --frozen-lockfile` install dependencies
1. `yarn build` to build production ready bundle
1. `yarn start` start the node server
