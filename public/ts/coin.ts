/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="../../DefinitelyTyped/es6-promise/es6-promise.d.ts" />

import colorModule = require('./color');
import geometry = require('./geometry');
import fabricN = require('fabric');
var fabric = fabricN.fabric;

var svgPromise : Promise<fabric.fabric.IObject> =
	new Promise<fabric.fabric.IObject>((resolve, reject) => {
		fabric.loadSVGFromURL('cylinder.svg', function(objects, options) {
			options.hasControls = false;
			options.scaleX = geometry.COIN_WIDTH / options.width;
			options.scaleY = geometry.COIN_HEIGHT / options.height;

			resolve(fabric.util.groupSVGElements(objects, options));
		});
	})

var cached : fabric.fabric.IObject = null;

export function make(color : colorModule.Color) : Promise<Coin> {

	if (cached) {
		return Promise.resolve<Coin>(
			new Coin(color, fabric.util.object.clone(cached)));
	}

	return svgPromise.then(function(fabObj) {
		cached = fabObj;
		return new Coin(color, fabObj);
	});
};

export class Coin {

	constructor(public color : colorModule.Color,
		public gui : fabric.fabric.IObject) {

		this.gui.setFill(colorModule.Shades.getValue(color));
	}
};
