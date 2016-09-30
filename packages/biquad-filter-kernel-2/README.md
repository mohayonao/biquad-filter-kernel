# biquad-filter-kernel-2
[![Build Status](https://img.shields.io/travis/mohayonao/biquad-filter-kernel.svg?style=flat-square)](https://travis-ci.org/mohayonao/biquad-filter-kernel)
[![NPM Version](https://img.shields.io/npm/v/biquad-filter-kernel-2.svg?style=flat-square)](https://www.npmjs.org/package/biquad-filter-kernel-2)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> biquad filter kernel that use high accurate coefficients

## Installation

```
$ npm install --save biquad-filter-kernel-2
```

## API
  - `constructor()`
  - `#process(coeffs, input, output, inNumSamples): void`
    - `coeffs: number[][]` filter coefficients
      - `assert(coeffs.length === 5)`
      - `assert(coeffs.every(values => values.length === inNumSamples))`
      - coefficients are `[ b0, b1, b2, a1, a2 ]` (a0 = 1)
    - `input: number[]` input signal
      - `assert(input.length === inNumSamples)`
    - `output: number[]` output signal
      - `assert(output.length === inNumSamples)`
    - `inNumSamples: number` number of samples

## Usage

```js
const BiquadFilterKernel = require("biquad-filter-kernel-2");

const biquadFilter = new BiquadFilterKernel();
const coeffs = [
  0.000606, 0.001213, 0.000606, -1.948941, 0.951366
].map(coeff => new Float32Array(1024).fill(coeff));
const input = new Float32Array(1024).map(Math.random);
const output = new Float32Array(1024);

biquadFilter.process(coeffs, input, output, 1024);
```

## See Also

- [biquad-filter-kernel](https://github.com/mohayonao/biquad-filter-kernel/tree/master/packages/biquad-filter-kernel) / simple coefficients version

## License

MIT
