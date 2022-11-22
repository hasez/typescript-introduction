import { Item } from './item';
let elem = document.getElementById('output');
let aBook = new Item('はじめてのTypeScript', 3980);
aBook.say(elem);