
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

function changeLink(str){
    if(str.includes("://")){
        let newStr = str.split("://");  //--> [https, human.or.kr]
        if(newStr[0]=="https")
            return newStr[0]+"://secure."+newStr[1];
        else if(newStr[0]=="http")
            return newStr[0]+"://open."+newStr[1];
    } else {
        return "경로가 잘못되었습니다."
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));