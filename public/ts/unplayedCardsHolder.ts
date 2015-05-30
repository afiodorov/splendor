/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import state = require('./state');

type CardData = {green?: number; blue?: number; red?: number; white?: number;
	black?: number; points: number}

class UnplayedCardsHolder {

	constructor(public stateHolder : state.StateHolder,
		public canvas : fabric.fabric.ICanvas) {
	}

	draw() {

		for(var type in state.CardType) {
			if(typeof state.CardType[type] === 'number') continue;
			console.log(this.stateHolder.cards(type));
		}
	}
};

export = UnplayedCardsHolder;
