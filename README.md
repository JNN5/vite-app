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
- e2e: end2end tests written with playwright
- public: all static content that doesn't have to be transpiled goes here
- src: 
  - app: router, state management and hooks
  - assets: icons and graphics that need to be processed
  - components: react components that are reused in different pages
  - features: implementation of specific state slices
  - mocks: here we define the API mocks for our unit tests using MSW
  - pages: here go the different pages. A page is a frontend route
  - test-setup: here we define common test setup scripts and utils

## Routing
Pages need to be registered as routes in the router. The router ocnfiguration is found in src/app/router.tsx.
Use the loadable component to asynchronously (lazy) load the page (via React Suspense)