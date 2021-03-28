# Publish the library to NPM

## Miscellaneous

### Babel

Because of the root context, the name of the local babel config should be "babel.config.json".

### package.json peerDependencies

In order to work for the consumer

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
