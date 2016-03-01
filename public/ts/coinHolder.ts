/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="../../DefinitelyTyped/es6-promise/es6-promise.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

import colorModule = require('./color');
import state = require('./state');
import geometry = require('./geometry');
import color = require('./color');
import coin = require('./coin');

class CoinHolder {

    gui: fabric.fabric.IGroup;

	constructor(public stateHolder : state.StateHolder,
		public canvas : fabric.fabric.ICanvas) {
	}

	draw() {
	    var coins : fabric.fabric.IObject[] = [];
	    var left = 30;
	    colorModule.Shades.forEach(function(key, value) {
	        var coinInstance = new coin.Coin(key);

	        coinInstance.gui.setLeft(left);
	        left += 70;
	        coins.push(coinInstance.gui);
        });

        this.gui = new fabric.Group(coins);
        this.canvas.add(this.gui);
	}
}

export = CoinHolder
