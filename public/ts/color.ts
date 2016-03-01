import collections = require('./../../tsDependencies/typescript-collections');

export enum Color {Green, Blue, Red, White, Black, Gold};

export type ColorHolder = {green: number; blue: number; red: number; white: number;
    black: number}

export var Shades = new collections.Dictionary<Color, string>();

Shades.setValue(Color.Green, 'green');
Shades.setValue(Color.Blue, 'blue');
Shades.setValue(Color.Red, 'red');
Shades.setValue(Color.White, '#FFFFFF');
Shades.setValue(Color.Black, '#000000');
Shades.setValue(Color.Gold, '#FFD700');
