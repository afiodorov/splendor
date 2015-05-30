/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

import Card = require('./card');
import color = require('./color');
import state = require('./state');
import UnplayedCardsHolder = require('./unplayedCardsHolder');

var stateJson : state.State = {
	turn: 0,
	nobles: [{
		black: 3,
		red: 3,
		green: 3,
		points: 3
	}],
	coins: {
		white: 2,
		blue: 3,
		red: 4,
		black: 4,
		gold: 5,
		green: 4
	},
	cards: [{
		green: 1,
		red: 2,
		points: 0,
		type: state.CardType.I
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.I
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.II
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.II
	}, {
		green: 1,
		red: 2,
		points: 0,
		type: state.CardType.II
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.II
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.II
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.II
	}, {
		green: 1,
		red: 2,
		points: 0,
		type: state.CardType.III
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.III
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.III
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.III
	}],
	players: [{
		name: "Chris",
		coins: {
			white: 1,
			blue: 1,
			red: 1,
			gold: 0,
			green: 1
		},
		cards: [{
			green: 3,
			blue: 2,
			points: 1,
			type: state.CardType.I
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II
		}],
		reserved: null,
		id: 0,
	}, {
		name: "Tom",
		coins: {
			white: 1,
			blue: 1,
			red: 1,
			gold: 0,
			green: 1,
		},
		cards: [{
			green: 3,
			blue: 2,
			points: 1,
			type: state.CardType.I
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II
		}],
		reserved: null,
		id: 1
	}, {
		name: "Matt",
		coins: {
			white: 1,
			blue: 1,
			red: 1,
			gold: 0,
			green: 1,
			type: state.CardType.I
		},
		cards: [{
			green: 3,
			blue: 2,
			points: 1,
			type: state.CardType.II
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II
		}],
		reserved: null,
		id: 2
	}]
	};

export = GameManager;
class GameManager {
	stateHolder : state.StateHolder;
	unplayedCardHolder : UnplayedCardsHolder;

	constructor(elementId: string) {
		var canvas = new fabric.Canvas(elementId);

		var card = new Card(1, color.Color.Green,
			{green: 0, blue: 3, white: 5, red: 3, black: 3});
		card.initGui(canvas);

		this.stateHolder = new state.StateHolder(stateJson);
		this.unplayedCardHolder = new UnplayedCardsHolder(this.stateHolder,
			canvas);
		this.unplayedCardHolder.draw();
	}
}
