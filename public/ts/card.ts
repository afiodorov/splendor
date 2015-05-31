/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import color = require('./color');
import state = require('./state');
import fabricN = require('fabric');
import geometry = require('./geometry');
import collections = require('../../tsDependencies/typescript-collections');

var fabric = fabricN.fabric;

class Card {
    private canvas: fabric.fabric.ICanvas;
    gui: fabric.fabric.IGroup;
    points: number;
    value: color.Color;
    price: collections.Dictionary<color.Color, number>;
    type: state.CardType;

    constructor(data : state.CardData) {

        this.points = data.points;

        this.price = new collections.Dictionary<color.Color, number>();
        this.price.setValue(color.Color.Green, data.green);
        this.price.setValue(color.Color.Blue, data.blue);
        this.price.setValue(color.Color.Red, data.red);
        this.price.setValue(color.Color.White, data.white);
        this.price.setValue(color.Color.Black, data.black);

        if(data.value == 'green') {
        	this.value = color.Color.Green;
        } else if (data.value == 'blue') {
        	this.value = color.Color.Blue;
        } else if (data.value == 'black') {
        	this.value = color.Color.Black;
        } else if (data.value == 'red') {
        	this.value = color.Color.Red;
        } else if (data.value == 'white') {
        	this.value = color.Color.White;
        } else {
        	throw new RangeError();
        }

        this.type = data.type;

        this.initGui();
    }

    initGui() : void {
		var groupArr : fabric.fabric.IObject[] = [];

        var outerRect = new fabric.Rect({width: geometry.CARD_WIDTH,
			height: geometry.CARD_HEIGHT, fill: '#38F3FC',
			stroke: '#000', strokeWidth: 2});
		groupArr.push(outerRect)

		if(this.points) {
			var pointsText = new fabric.Text(this.points.toString(), {
				fontSize: 30, left: 7, top: 2, fontStyle: 'italic',
				fontWeight: 'bold'});

			groupArr.push(pointsText);
		}

        var valueCircle = new fabric.Circle({radius: 12, left: 55, top: 6,
        	fill: color.Shades.getValue(this.value)});
        groupArr.push(valueCircle);

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

        this.gui = new fabric.Group(groupArr);
    }
}

export = Card
