/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import colorModule = require('./color');
import geometry = require('./geometry');
import fabricN = require('fabric');
var fabric = fabricN.fabric;

class Coin {

    gui: fabric.fabric.IPathGroup;

    static preloaded : fabric.fabric.IObject = null;
    static preload(callback) {
		fabric.loadSVGFromURL('cylinder.svg', function(objects, options) {
			options.hasControls = false;
			options.scaleX = geometry.COIN_WIDTH / options.width;
			options.scaleY = geometry.COIN_HEIGHT / options.height;

			Coin.preloaded = fabric.util.groupSVGElements(objects, options);

			callback();
		});
    }

    constructor(public color : colorModule.Color) {

    	var self = this;
    	var f = function() {
			self.gui = fabric.util.object.clone(Coin.preloaded);
			self.gui.getObjects().forEach(function(obj) {
				obj.setFill(colorModule.Shades.getValue(self.color));
			});
		}

    	if(Coin.preloaded) {
    		f();
    	} else {
			Coin.preload(f);
    	}
    }
}

export = Coin;
