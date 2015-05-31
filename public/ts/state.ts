export enum CardType {I, II, III};

type idType = number;

export type CardData = {green?: number; blue?: number; red?: number;
	white?: number; black?: number; points: number; value: string;
	type: CardType};

export type CoinData = {white?: number; blue?: number; red?: number; black?:
	number; gold?: number; green?: number};

type Player = {name: string; id: idType; coins: CoinData; cards: CardData[];
	reserved: CardData[]};

type NobleData = {green?: number; blue?: number; red?: number; white?: number;
	black?: number; points: number};

export type State = {turn: idType; nobles: NobleData[]; coins: CoinData;
	cards: CardData[]; players: Player[] };

export class StateHolder {

	private state : State;

	constructor(state : State) {

		this.state = state;

	}

	cards(type?: CardType) : CardData[] {
		if(type) {
			return this.state.cards.filter(function(card) {
				return card.type == type;
			})
		}

		return this.state.cards;
	}
};
