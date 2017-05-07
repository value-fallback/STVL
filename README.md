# STVL
[![license](https://img.shields.io/github/license/value-fallback/STVL.svg?style=flat-square)](https://github.com/value-fallback/STVL/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/stvl.svg?style=flat-square)](https://www.npmjs.com/package/stvl)
[![npm](https://img.shields.io/npm/dt/stvl.svg?style=flat-square)](https://www.npmjs.com/package/stvl)
[![Travis](https://img.shields.io/travis/value-fallback/STVL.svg?style=flat-square)](https://travis-ci.org/value-fallback/STVL)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Fallback when a value is not [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

## Installation

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/stvl.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/stvl)

```
npm install stvl
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add stvl
```

## Usage

```javascript
const stvl = require('stvl');

// When a value is not String, it will return fallback value.
let a = stvl(null, 0); // a = 0
let b = stvl({}, 'x'); // b = "X"

// When a value is String, it will return that value.
let c = stvl('A', 1); // c = "A"
let d = stvl(`B`, [0, 1, 2]); // d = "B"
```

## API

### stvl(value, fallbackValue)

#### value
A main value.

#### fallbackValue
A fallback value.
