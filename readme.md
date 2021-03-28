# NPM Package

This component library is published in the NPM registry, available for anyone to install and use in a project.

NPM Registry: <https://www.npmjs.com/package/@abbeblubb/react-library>

- The React components library is deployed as an NPM package
- The package is available for anyone to install and use
- The NPM package is organization scoped: <https://docs.npmjs.com/creating-and-publishing-an-organization-scoped-package>
- Parcel bundler for dev
- Webpack configuration for production build



## Display the component library locally

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
