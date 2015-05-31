/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

import state = require('./state');
import geometry = require('./geometry');
import color = require('./color');
import Coin = require('./coin');

class CoinHolder {

    gui: fabric.fabric.IObject;

	constructor(public stateHolder : state.StateHolder,
		public canvas : fabric.fabric.ICanvas) {

		var coin = new Coin(color.Color.Red);
		canvas.add(coin.gui);
	}

	draw() {
	}
}

export = CoinHolder
