'use strict';

const fruit = new Map(); // MAPS ELEMENTS ARE ACESSED BY THEIR KEYS
fruit.set(1, 'Apple');
fruit.set(1, 'Orange');
fruit.set(1, 'Lemon');
fruit.get(1);
fruit.delete(1);

const letters = new Set(); // SETS DON'T ACCEPT DUPLICATE VALUES
letters.add('A');
letters.add('A');
letters.add('B');
letters.add('C');
letters.delete('C');
letters.has('B');