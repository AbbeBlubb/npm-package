# NPM Package

- React library deployed as NPM package
- The NPM package is organization scoped: <https://docs.npmjs.com/creating-and-publishing-an-organization-scoped-package>
- Parcel bundler for dev
- Webpack config for production

## Display the component library

Hot reload with Parcel.

``` Nodejs
> npm run dev
```

## Publish the library to NPM

### Build the library

Build with Webpack.

``` Nodejs
> npm run build:lib
```

### Sign in to NPM

``` Nodejs
> npm adduser
```

### First publish

The first time a scope package is to be published, the public acces flag must be added in order for the package to be public.

``` Nodejs
> npm publish --access=public
```

### Subsequent publishes

- Update the SemVer in package.json
- Push to registry

``` Nodejs
> npm publish
```

## Install

``` Nodejs
> npm i @abbeblubb/react-library
```

## Import 

``` Reactjs
import { Button, Hello } from "@abbeblubb/react-library";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Hello name="Elvis!" />
      <Button />
    </div>
  );
}

export default App;
```
