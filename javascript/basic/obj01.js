//object 객체

//자바스크립트의 자료형

let x = 10;

//배열
let arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr);

//객체(Object)

//JSON : JavaScript Object Notation
// { key : value }

//java 비교시, Map <Key, Value>

let weather = '맑음';
console.log(weather);

let weatherInfo = {
                day : '240514',
                weather: '맑음',
                temperature: 21,
                location: '천안'
            };

console.log(weatherInfo);
console.log(weatherInfo.location);
console.log(weatherInfo.temperature);



// 점심식사정보    짜장면   5000  대천반점  천안시장내부
let lunchInfo = {
    menu : "짜장면",
    price : 5000,
    shop : '대천반점',
    location : '천안시장내부'
};

//객체 , 배열
//    +  객체 : 배열
// 배열 : 객체

let shopInfo = {
    name : '대천반점',
    location : '천안시장내부',
    menu : ['짜장면', '짬뽕', '볶음밥']
};

console.log(shopInfo.location);
console.log(shopInfo.menu[1]);

let shopInfo2 = {
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000
        },
        {
            name:'짬뽕',
            price:7000
        },
        {
            name:'볶음밥',
            price:7000
        }
    ]
};

console.log(shopInfo2.menu); // 메뉴배열 정보
console.log(shopInfo2.menu[2]); // 메뉴배열[2] -> 볶음밥
console.log(shopInfo2.menu[2].price); // 볶음밥 가격만

let shopInfo3 = {
    name : '대천반점',
    location : '천안시장내부',
    address : {
        postCode : 51211,
        addr1: '천안시',
        addr2: '동남구'
    },
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
};
console.log(shopInfo3.menu[0].raw); //짜장면 재료 출력
console.log(shopInfo3.menu[0].raw[1]);//짜장면 재료 중에 양파만 출력


let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

//휠렛버거의 가격
console.log(shopList[1].menu[1].price);
//볶음밥의 재료들
console.log(shopList[0].menu[2].raw);
//싸이버거에 들어있는 닭다리살 재료
console.log(shopList[1].menu[0].raw[2]);
//대천반점의 위치
console.log(shopList[0].location);