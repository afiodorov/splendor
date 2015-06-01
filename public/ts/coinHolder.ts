/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="../../DefinitelyTyped/es6-promise/es6-promise.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

import state = require('./state');
import geometry = require('./geometry');
import color = require('./color');
import coin = require('./coin');

class CoinHolder {

    gui: fabric.fabric.IObject;

	constructor(public stateHolder : state.StateHolder,
		public canvas : fabric.fabric.ICanvas) {

		var coinPr = coin.make(color.Color.Red).then(function(coin) {
			canvas.add(coin.gui);
		});

		var coinPr = coin.make(color.Color.Green).then(function(coin) {
			coin.gui.setLeft(100);
			canvas.add(coin.gui);
		});

		var coinPr = coin.make(color.Color.Black).then(function(coin) {
			coin.gui.setLeft(200);
			canvas.add(coin.gui);
		});
	}

	draw() {
	}
}

export = CoinHolder
