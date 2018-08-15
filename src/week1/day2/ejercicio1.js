let aux = /(ca)(t|r)/;
console.log(aux.test("hi cat"));

let aux2 = /(p|pr)(op)/;
console.log(aux2.test("pop"));

let aux3 = /(ferr)(y|errari|et)/;
console.log(aux3.test("I have a ferrari"));

let aux4 = /\w+ious/;
console.log(aux4.test("this finish with ious"));

let aux5 = /\s(,|.|:|;)/;
console.log(aux5.test("Hi ,Bye"));

let aux6 = /\w\w\w\w\w\w+/;
console.log(aux6.test("Francisco"));

let aux7 = /[^eE]/;
console.log(aux7.test("Francisco"));
