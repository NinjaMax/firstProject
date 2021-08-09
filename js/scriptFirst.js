// let arr=['plum.png', 'orange.jpg', 6.0,'apple.bmp'];
// console.log(arr[0],arr[3]);
//alert('Hello dude');
//const result=confirm('Are you here Dude?');
//console.log(result);
// const answer = prompt("Are You 18 years old?",
// "please write your age");
// console.log(typeof(answer));
//  const answers =[];
//  answers[0]=prompt('Сколько вам лет?','');
// answers[1]=prompt('Как ваше имя?','');
// answers[2]=prompt('Занимаетесь спортом?');
//  document.write(answers +5);
// console.log(typeof(answers));
// const category = 'toys';
// console.log(`https://someurls.com/${category}/5`);
// const user = "Ivan";
// alert(`Hello ${user}`);

////////////////////////////////////////////////////
// const numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
// let personalMovieDB={
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genders:[],
//     privat:false

// };

// const a =prompt('Один из последних просмотренных фильмов?'),
//       b =prompt('На сколько оцените его?'),
//       c=prompt('Один из последних просмотренных фильмов?'),
//       d=prompt('На сколько оцените его?');

//     personalMovieDB.movies[a]=b;
//     personalMovieDB.movies[c]=d;
//     personalMovieDB.movies[2]="Batman";
//     console.log(personalMovieDB);

/////////////////////////////////////////////////////
    // if(5==4) {
//     console.log('Ok');
// } else {
//     console.log("Error");
// }

// const num =50;

// if(num<49){
//     console.log("Error");
// } else if(num>100){
//     console.log('Many');
// } else{
//     console.log('Ok!');
// }
// const num =51;
//     (num===50) ? console.log('Ok!') : console.log('Error');   

///////////////////////////////////////////////////////////
// const num =50;
// switch(num){
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong to match');
//             break;
//     case 50:
//         console.log('GOOOD');
//         break;
//     default:
//         console.log('Not Yet');
//         break;
// }

/////////////////////////////////////
//  let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i =1; i < 10; i++){
//     if(i == 6) {
//         continue;
//     }
//     console.log(i);
// }
//////////////////////////////////////////////////////////////////////
// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);
/////////////////////////////////////////////////////////////
// let num=20;
// function showFirstMessage(text) {
//   console.log(text);
//   //let num=15;
//   console.log(num);
// }

// // showFirstMessage("Hello World Dude");
// // console.log(num);

// function calc(a,b) {
//     return (a + b);
//   }
//   console.log(calc(4,3));
//   console.log(calc(10,10));
//   console.log(calc(5,5));
///////////////////////////////////////////////////////////////

// const str = "test";

// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str);

// const strn ='BIG TEST';

// console.log(strn.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf('fruit'));

// const logg = "Hello World";
// console.log(logg.slice(6,11));

// console.log(logg.substr(6, 5));

// const num =12.2;
// console.log(Math.round(num));

// const test ='12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));
////////////////////////////////////////////////////////////////
// function learnJS(lang, callback){
//   console.log(`Я учу: ${lang}`);
//   callback();
// }
// function done(){
//   console.log('Я прошел этот урок!');
// }
//   learnJS('JavaScript',done);

 //const arr=[1, 2, 3, 6, 5, 4];
//arr.pop();
//arr.push(10);
//for (let i=0; i<arr.length; i++){
 // console.log(arr[i]);
//}
//  for(let value of arr) {
//    console.log(value);
//  }

 //arr.forEach(function(item, i, arr) {
 //  console.log(`${i}:${item} внутри массива ${arr}`)
 //});

// const soldier = {
//   health:400,
//   armor:100
// };
// constjohn = Object.create(solder);