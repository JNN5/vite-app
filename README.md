# Frontend Boilerplate

## Getting started

1. Update all dependencies to their latest version

```
yarn upgrade --latest
```

2. Check for security issues with dependencies

```
yarn audit
```

## Technologies

- Buildtool: Vite (instead of CRA) https://vitejs.dev/
- Framework: React (SPA)
- Testing:
  - Linitng: Eslint https://eslint.org/
  - Formating: Prettier https://prettier.io/
  - Unittests: Vitest (instead of Jest) https://vitest.dev/
  - DOM-Interaction: React Testing library https://testing-library.com/docs/react-testing-library/intro/
  - Mocking: MSW https://mswjs.io/
  - End2End: Playwright (instead of Cypress) https://playwright.dev/
- Libraries:
  - State: Redux Toolkit https://redux-toolkit.js.org/
  - Data fetching: RTK Query (Redux Toolkit) https://redux-toolkit.js.org/rtk-query/overview
  - UI: Ant Design https://ant.design/
- CLI: pnpm (optional, npm and yarn work too) https://pnpm.io/

## Folders
- public: all static content that doesn't have to be transpiled goes here
- src: 
  - app: state management and hooks
  - features: implementation of specific state slices
  - pages: here go the different pages. A page is a frontend route
  - mocks: here we define the API mocks for our unit tests using MSW
  - tests: here we define common test setup scripts and utils
- e2e: end2end tests written with playwright
