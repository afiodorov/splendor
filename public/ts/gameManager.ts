/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;
import Card = require('./card');
import color = require('./color');

class GameManager {
	constructor(elementId: string) {
		var canvas = new fabric.Canvas(elementId);

		var card = new Card(1, color.Color.Green,
			{green: 0, blue: 3, white: 5, red: 3, black: 3});
		card.initGui(canvas);
	}
}

export = GameManager;
