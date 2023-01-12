// INCLUDES - KARAKTERİN İFADEDE YER ALIP ALMADIĞINI GÖSTERİR


// let email = 'abc@clarusway.com'
// console.log(email.includes('@'));
// if(email.includes('@')){
//     console.log("email valid");
// }else{
//     console.log("email not valid");
// }

// let email = 'tkayis20@gmail.com'
// console.log(email.includes('@'));
// if(email.includes('@')){
    // // console.log('Your Email Address Is Valid')
// }else{
    // // console.log('Your Email Address Is Unvalid');
// }

// INDEXOF  - YİNE ARAMA YAPTIRIR ANCAK BU KEZ CEVAP KARAKTER SIRASININ GÖSTEREN RAKAM OLARAK GELİR, EĞER İÇERİKTE YOKSA -1 OLARAK DÖNER
// let email = 'tkayis20@gmail.com'
// console.log(email.indexOf('@'));
// function findCount(source, search){
    // let count = 0
    // let position = source.indexOf(search)
    // while (position !== -1){
        // count++
        // // position = source.indexOf(search, ++position)
    // }
    // return count
// }
// // let str = 'you dont know what you dont know until you know.'
// console.log (findCount(str, "know"));
// let str = 'you dont know what you dont know until you know.'
// console.log(str.search('know'))
// 

// REPLACE -- BUL VE DEĞİŞTİR
// let str = 'Mr. Brown has a brown house and brown car'
// let newStr = str.replace(/brown/ig, 'red')
// console.log(newStr);

// SPLIT -- SONUCU BİZE STRING OLARAK DEĞİL ARRAY OLARAK DÖNDÜRÜR, BU BİZİM HAREKET ALANIMIZI ARTIRACAK İLERİDE

// let str = 'Hello World'
// 
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split("Hello"));
// 
// let abc = str.split('Full')
// console.log(abc);

// TOLOWERCASE -- HERŞEYİ KÜÇÜK HARFE ÇEVİRİR

// let str = 'Hello World'
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const str = 'gunaydin hayirli isler'

// const str = 'gü naydın hayırlı işler'
// console.log(str.toLocaleLowerCase('TR'));
// console.log(str.toLocaleUpperCase('EN'));

// console.log(str.toLocaleLowerCase('en-US'));
// console.log(str.toLocaleUpperCase('TR'));

// let x = prompt('KULLANICI ADINIZI GİRİNİZ').toUpperCase('TR')
// console.log(x.trim().slice(6.9));

let str = 'clarusway@Clarusway.com is our e-mail address'
console.log(str.endsWith("clarusway", 9));