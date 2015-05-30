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
        	fontSize: 30, left: 3, top: 2});

        var valueCircle = new fabric.Circle({radius: 12, left: 55, top: 6,
        	fill: color.Shades.getValue(this.color)});

        this.gui = new fabric.Group([outerRect, pointsText, valueCircle],
			{top: 100, left: 100});
        this.canvas.add(this.gui);
    }
}

export = Card
