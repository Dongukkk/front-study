
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

// 출력결과가 알맞게 나오도록 코드를 추가하세요.

// 조건1. :// 형식이 없으면 경로가 잘못되었습니다.
// 조건2. https로 접속시 secure가 추가됨
// 조건3. http 로 접속시 open이 추가됨

function changeLink(str){
    if(str.includes("://")){
        let newStr = str.split("://");  //--> [https, human.or.kr]
        if(newStr[0]=="https")
            return newStr[0]+"://secure."+newStr[1];
        else if(newStr[0]=="http")
            return newStr[0]+"s://open."+newStr[1];
    } else {
        return "경로가 잘못되었습니다."
    }

    // console.log(str.includes("://"));   //true false
    // console.log(str.indexOf("://"));    //있으면 Index값 ,없으면 -1
    /*
    if(str.indexOf("://")==-1){
        return "경로가 잘못되었습니다.";
    }
    */
    // console.log(str.substring(str.indexOf("://")+3));

    // https    str.includes('https')
    // http     str.includes('https')

    // 첫 시작 5글자 : https    https://
    // 첫 글자 4글자 : http     http://
    // 첫 글자 5글자 : http:
    // console.log(str.substring(0, 5));
    /*
    if(str.substring(0, 5) == 'https'){
        return "https://" + "secure." + str.substring(str.indexOf("://")+3);
    }
    if(str.substring(0, 5) == 'http:'){
        return "https://" + "open." + str.substring(str.indexOf("://")+3);
    }
        */
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));