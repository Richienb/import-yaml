# import-yaml [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/import-yaml/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/import-yaml)

Import a YAML file.

[![NPM Badge](https://nodei.co/npm/import-yaml.png)](https://npmjs.com/package/import-yaml)

## Install

```sh
npm install import-yaml
```

## Usage

```js
const importYaml = require("import-yaml");

const data = importYaml.sync("file.yaml");

console.log(data.value);
```

## API

### importYaml(filename)

Returns a promise that resolves with the YAML contents parsed as an object.

### importYaml.sync(filename)

Returns the YAML contents parsed as an object.

#### filename

Type: `string`

The file to import.
