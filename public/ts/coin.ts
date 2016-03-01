/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import colorModule = require('./color');
import geometry = require('./geometry');
import fabricN = require('fabric');
var fabric = fabricN.fabric;

export class Coin {

    public gui : fabric.fabric.IObject;
	constructor(public color : colorModule.Color) {

		this.gui = new fabric.Circle({radius: 25,
        	fill: colorModule.Shades.getValue(color),
            strokeWidth: 1,
            stroke: '#000000'
        });
    }
};
