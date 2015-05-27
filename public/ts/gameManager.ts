/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

class GameManager {
	constructor(elementId: string) {
		var canvas = new fabric.Canvas(elementId);

		canvas.add(
			new fabric.Rect({top: 100, left: 100,
						     width: 50, height: 50, fill: '#000'})
		);
	}
}

export = GameManager;
