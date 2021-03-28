# Publish the library to NPM

## Sign in to NPM

``` Nodejs
> npm adduser
```

## Publish

This script will clear the dist folder, build a bundle, copy files and publish to npm:

``` Nodejs
> npm run build:lib
```

## Miscellaneous

### Babel

Because of the root context, the name of the local babel config should be "babel.config.json".

### package.json peerDependencies

In order to share the react and react-dom with the consumer. The consumer must install react and react-dom.

### When creating a new lib

The first time a new scoped package is to be published, the public acces flag must be added in order for the package to be public.

``` Nodejs
> npm publish --access=public
```
