//oper01.js

//operator

console.log( 2 ** 4 );  //2 * 2 * 2 * 2

let x = 10;
let y = 10;
let z = '10';

console.log(x > 5);
//      ==  !=

//  ==      ===
//  !=      !==
console.log(x==y);  //true
console.log(x==z);  //true

console.log(x===y); //true
console.log(x===z); //false     === 값 + 자료형 까지 일치 하는가?

console.log( x > 5 && y > 0);
console.log( x == 1 || y >= 50);

//숫자 -> 문자
//문자 -> 숫자

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w);

// String()
// Number()

console.log(q + String(e));
console.log(q + Number(w));

console.log(Number("123.123"));


if( q == 10 ){
    console.log("출력~~~");
}

q == 10 && console.log("출력~~~&&");