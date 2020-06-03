(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.scrollzoom = {}));
}(this, (function (exports) { 'use strict';

	const A = 2;

	const X = 2;
	console.log(A + X);

	exports.X = X;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
