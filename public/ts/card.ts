/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import color = require('./color');
import fabricN = require('fabric');
import collections = require('../../tsDependencies/typescript-collections');

var fabric = fabricN.fabric;

class Card {
    private canvas: fabric.fabric.ICanvas;
    gui: fabric.fabric.IGroup;
    price: collections.Dictionary<color.Color, number>;

    constructor(public points: number, public value: color.Color,
		price: color.ColorHolder) {

        this.points = points;

        this.price = new collections.Dictionary<color.Color, number>();
        this.price.setValue(color.Color.Green, price.green);
        this.price.setValue(color.Color.Blue, price.blue);
        this.price.setValue(color.Color.Red, price.red);
        this.price.setValue(color.Color.White, price.white);
        this.price.setValue(color.Color.Black, price.black);
    }

    initGui(canvas: fabric.fabric.ICanvas) : void {
        this.canvas = canvas;
        var outerRect = new fabric.Rect({width: 85, height: 155,
			fill: '#38F3FC', stroke: '#000', strokeWidth: 2});
        var pointsText = new fabric.Text(this.points.toString(), {
        	fontSize: 30, left: 7, top: 2, fontStyle: 'italic',
        	fontWeight: 'bold'});

        var valueCircle = new fabric.Circle({radius: 12, left: 55, top: 6,
        	fill: color.Shades.getValue(this.value)});

        var groupArr = [outerRect, pointsText, valueCircle];

		var shift = 0;
		this.price.forEach(function(col, price) {
			if (price == 0) return;

			var priceCircle = new fabric.Circle({radius: 10, top: 50 + shift,
				left: 5, fill: color.Shades.getValue(col)});

			var priceText = new fabric.Text(price.toString(), {
				fontSize: 20, left: 30, top: 50 + shift});

			shift += 25;

			groupArr.push(priceCircle, priceText);
		});

        this.gui = new fabric.Group(groupArr, {top: 100, left: 100});
        this.canvas.add(this.gui);
    }
}

export = Card
