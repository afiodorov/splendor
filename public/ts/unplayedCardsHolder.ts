/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="../../DefinitelyTyped/lodash/lodash.d.ts" />

import _ = require('lodash');
import Card = require('./card');
import state = require('./state');
import geometry = require('./geometry');
import fabricN = require('fabric');
var fabric = fabricN.fabric;

type CardData = {green?: number; blue?: number; red?: number; white?: number;
	black?: number; points: number}

class UnplayedCardsHolder {

    gui: fabric.fabric.IGroup;

	constructor(public stateHolder : state.StateHolder,
		public canvas : fabric.fabric.ICanvas) {
	}

	draw() {
	    var outerRect = new fabric.Rect({width: geometry.CARD_AREA_WIDTH,
			height: geometry.CARD_AREA_HEIGHT, stroke: '#000', strokeWidth: 1,
			fill: '#fff'});

		var allElements : fabric.fabric.IObject[] = [outerRect];

		var top_shift = 0;
		for(var type in state.CardType) {
			if(typeof state.CardType[type] === 'number') continue;

			var textType = _.findKey(state.CardType, function(t) {
				return t == type;
			});

			var pileRect = new fabric.Rect({width: geometry.CARD_WIDTH,
				height: geometry.CARD_HEIGHT, stroke: '#000', strokeWidth: 1,
				fill: '#fff'});

			var pileText = new fabric.Text(textType, {fontSize: 50,
				textAlign: 'center', originX: 'center'});

				pileText.set('left',
					+pileRect.width/2 - pileText.getBoundingRect().width/2);

			var pile = new fabric.Group([pileRect, pileText], {top: top_shift});

			allElements.push(pile);

			var width_shift = geometry.CARD_WIDTH + 5;
			this.stateHolder.cards(type).forEach(function(cardData) {

				var card = new Card(cardData);

				card.gui.setLeft(width_shift);
				card.gui.setTop(top_shift);

				allElements.push(card.gui);

				width_shift += geometry.CARD_WIDTH + 5;
			});

			top_shift += geometry.CARD_HEIGHT + 10;

		}

		this.gui = new fabric.Group(allElements, {top: 80, left: 20});
		this.canvas.add(this.gui);
	}
};

export = UnplayedCardsHolder;
