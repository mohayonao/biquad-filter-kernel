"use strict";

const assert = require("assert");
const BiquadFilterKernel = require("..");

describe("BiquadFilterKernel", () => {
  it("should create BiquadFilterKernel instance", () => {
    const biquadFilter = new BiquadFilterKernel();

    assert(biquadFilter instanceof BiquadFilterKernel);
  });

  it("should process", () => {
    const biquadFilter = new BiquadFilterKernel();
    const coeffs = [ 0.000606, 0.001213, 0.000606, -1.948941, 0.951366 ];
    const input = new Float32Array(1024).map(Math.random);
    const output = new Float32Array(1024);

    biquadFilter.process(coeffs, input, output, 1024);

    assert(output.some(value => value !== 0));
    assert(output.every(value => !Number.isNaN(value)));
  });
});
