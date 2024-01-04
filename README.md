# weather
## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):
```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```

## Keys 
API key is store in .env file. An .env.example file is provided for you as a template. Copy your API key from RapidAPI, then place it here where "EXAMPLE_KEY" is. Your key should look like this:
```sh
VITE_RAPIDAPI_KEY="RAPIDAPI_KEY_COPIED_FROM_WEBSITE"
```
