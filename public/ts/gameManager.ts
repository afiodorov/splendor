/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;
import Card = require('./card');
import color = require('./color');

class GameManager {
	constructor(elementId: string) {
		var canvas = new fabric.Canvas(elementId);

		var card = new Card(0, color.Color.Green,
			{green: 0, blue: 1, white: 0, red: 0, black: 1});
		card.initGui(canvas);
	}
}

export = GameManager;
