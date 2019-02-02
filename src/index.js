import { sum } from './sum';
import style from './index.scss';
import Icon from './proba.png';

console.log('Hello World');
console.log(sum(2,3));

let heading = document.querySelector('#demo'),
    sumValue = sum(10,5);

heading.innerHTML = `10 + 6 = ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div#kot").appendChild(myIcon);