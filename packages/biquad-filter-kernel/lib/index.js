"use strict";

function BiquadFilterKernel() {
  this._x1 = 0;
  this._x2 = 0;
  this._y1 = 0;
  this._y2 = 0;
}

BiquadFilterKernel.prototype.process = function(coeffs, input, output, inNumSamples) {
  var b0 = coeffs[0];
  var b1 = coeffs[1];
  var b2 = coeffs[2];
  var a1 = coeffs[3];
  var a2 = coeffs[4];

  var x0;
  var x1 = this._x1;
  var x2 = this._x2;
  var y0;
  var y1 = this._y1;
  var y2 = this._y2;

  for (var i = 0; i < inNumSamples; i++) {
    x0 = input[i];
    y0 = (b0 * x0) + (b1 * x1) + (b2 * x2) - (a1 * y1) - (a2 * y2);
    output[i] = y0;

    x2 = x1 || 0;
    x1 = x0 || 0;
    y2 = y1 || 0;
    y1 = y0 || 0;
  }

  this._x1 = x1;
  this._x2 = x2;
  this._y1 = y1;
  this._y2 = y2;
};

module.exports = BiquadFilterKernel;
