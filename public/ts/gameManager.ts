/// <reference path="../../DefinitelyTyped/fabricjs/fabricjs.d.ts" />
/// <reference path="./card.ts" />
/// <reference path="./color.ts" />
/// <reference path="./unplayedCardsHolder.ts" />
/// <reference path="./coinHolder.ts" />

import fabricN = require('fabric');
var fabric = fabricN.fabric;

import Card = require('./card');
import color = require('./color');
import state = require('./state');
import UnplayedCardsHolder = require('./unplayedCardsHolder');
import CoinHolder = require('./coinHolder');

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
		type: state.CardType.I,
		value: 'green'
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.I,
		value: 'black'
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.I,
		value: 'blue'
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.I,
		value: 'white'
	}, {
		green: 1,
		red: 2,
		points: 0,
		type: state.CardType.II,
		value: 'red'
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.II,
		value: 'green'
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.II,
		value: 'blue'
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.II,
		value: 'black'
	}, {
		green: 1,
		red: 2,
		points: 0,
		type: state.CardType.III,
		value: 'white'
	}, {
		blue: 2,
		green: 1,
		red: 2,
		points: 1,
		type: state.CardType.III,
		value: 'white'
	}, {
		white: 1,
		red: 1,
		black: 1,
		points: 0,
		type: state.CardType.III,
		value: 'red'
	}, {
		green: 3,
		blue: 2,
		points: 0,
		type: state.CardType.III,
		value: 'blue'
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
			type: state.CardType.I,
			value: 'red'
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II,
			value: 'blue'
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
			green: 1
		},
		cards: [{
			green: 3,
			blue: 2,
			points: 1,
			type: state.CardType.I,
			value: 'green'
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II,
			value: 'blue'
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
			type: state.CardType.I,
			value: 'white'
		},
		cards: [{
			green: 3,
			blue: 2,
			points: 1,
			type: state.CardType.II,
			value: 'white'
		}, {
			red: 2,
			blue: 2,
			points: 0,
			type: state.CardType.II,
			value: 'black'
		}],
		reserved: null,
		id: 2
	}]
	};

export = GameManager;
class GameManager {
	stateHolder : state.StateHolder;
	unplayedCardHolder : UnplayedCardsHolder;
	coinHolder : CoinHolder;

	constructor(elementId: string) {
		var canvas = new fabric.Canvas(elementId);

		this.stateHolder = new state.StateHolder(stateJson);
		this.unplayedCardHolder = new UnplayedCardsHolder(this.stateHolder,
			canvas);
		this.unplayedCardHolder.draw();

		this.coinHolder = new CoinHolder(this.stateHolder, canvas);
		this.coinHolder.draw();
	}
}
