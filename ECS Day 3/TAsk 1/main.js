import { Shape } from "./Shape.js"
import {Rectangle as R} from "./Rectangle.js"
import {Square as S} from "./Square.js"
import {Circle as C} from "./Circle.js"



let Rect = new R(5,6)
let Sq = new S(5)
let Cir = new C(5);
let sh = new Shape()


console.log(Rect.toString());
console.log(Sq.toString());
console.log(Cir.toString());
console.log(Sq.perimeter());


