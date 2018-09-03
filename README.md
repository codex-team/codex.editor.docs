## Set up the environment

Install node version manager and required version of node js
```
$ chmod u+x ./bin/nvm.sh && ./bin/nvm.sh
$ nvm install
```

Install Yarn package manager
```
$ brew install yarn --without-node
```

> Use `--without-node` flag  because nvm version of Node is used

Or download it directly from the [website](https://yarnpkg.com/en/docs/install)

## Install npm packages

```
$ yarn install --frozen-lockfile
```

## Available scripts

### Start the server

```
$ yarn start
```

### Run ESLint with `--fix` option

```
$ yarn lint
```

### Run tests

```
$ yarn test
```
