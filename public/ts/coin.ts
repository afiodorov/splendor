/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="../../DefinitelyTyped/es6-promise/es6-promise.d.ts" />

import colorModule = require('./color');
import geometry = require('./geometry');
import fabricN = require('fabric');
var fabric = fabricN.fabric;

var cachedSvgImage : fabric.fabric.IObject;
var svgPromise : Promise<fabric.fabric.IObject> =
	new Promise<fabric.fabric.IObject>((resolve, reject) => {
		fabric.loadSVGFromURL('cylinder.svg', function(objects, options) {
			options.hasControls = false;
			options.scaleX = geometry.COIN_WIDTH / options.width;
			options.scaleY = geometry.COIN_HEIGHT / options.height;

			cachedSvgImage = fabric.util.groupSVGElements(objects, options)
			resolve(cachedSvgImage);
		});
	})

export function make(color : colorModule.Color) : Promise<Coin> {

	if (cachedSvgImage) {
		return new Promise<Coin>((resolve, reject) => {
			cachedSvgImage.clone(function (cloned) {
				resolve(new Coin(color, cloned));
			});
		});
	}

	return svgPromise.then(function(fabObj) {
		return new Coin(color, fabObj);
	});
};

export class Coin {

	constructor(public color : colorModule.Color,
		public gui : fabric.fabric.IObject) {

		this.gui.setFill(colorModule.Shades.getValue(color));
	}
};
