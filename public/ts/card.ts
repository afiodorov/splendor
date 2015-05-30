/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="./color.ts" />

import color = require('./color')
import fabricN = require('fabric');
var fabric = fabricN.fabric;

class Card {
    points: number;
    color: color.Color;
    price: color.ColorHolder;
    canvas: fabric.fabric.ICanvas;
    gui: fabric.fabric.IGroup;

    constructor(points: number, color: color.Color, price: color.ColorHolder) {
        this.color = color;
        this.points = points;
        this.price = price;
    }

    initGui(canvas: fabric.fabric.ICanvas) : void {
        this.canvas = canvas;
        var outerRect = new fabric.Rect({width: 85, height: 155,
			fill: '#D0FEFF', borderColor: '#000'});
        var pointsText = new fabric.Text(this.points.toString(), {
        	fontSize: 30});
        this.gui = new fabric.Group([outerRect, pointsText], {top: 100,
			left: 100});
        this.canvas.add(this.gui);

        console.log(color.Shades.getValue(this.color));
    }
}

export = Card
