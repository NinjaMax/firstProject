"use strict";
// method1

// let numberOfFilms, a, b, c, d;
// // a=true,
// // b=true,
// // c=true,
// // d=true,
// let e =false;

// while (e=true){ 
// numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
//     if(numberOfFilms==''){
//         e=false;
//         //numberOfFilms=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         // numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
        
//     } else if(numberOfFilms==prompt.isCancel){
//          //numberOfFilms=false;
//          e=false;
//          alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         //  numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
//      } else if(+numberOfFilms.length>10){
//          //numberOfFilms=false;
//          e=false;
//          alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         //  numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
//      } else {
//          e=true;
//          //numberOfFilms=true;
//         //  numberOfFilms =+prompt("Сколько фильмов вы уже смотрели?");
//          break;
        
//      }
//     }
//     while(e=true) {
//         a =prompt('Один из последних просмотренных фильмов?');
//     if(a ==''){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         a =prompt('Один из последних просмотренных фильмов?');
//     } else if(a==prompt.isCancel) {
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         a =prompt('Один из последних просмотренных фильмов?');
//     } else {
//         e=true;
//         break;
//     }
// }
//     while(e=true) {
//      b =prompt('На сколько оцените его?');
//      if(b==''){
//          e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//      } else if(b==prompt.isCancel){
//          e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//      } else if(b.length>20){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//      } else{
//          e=true;
//          break;
//      }
//     }
//     while(e=true){
//       c=prompt('Один из последних просмотренных фильмов?');
//       if(c=='') {
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else if(c==prompt.isCancel){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else if(c.length>20){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else{
//         e=true;
//         break;
//         }
//    }
//     while(e=true){ 
//         d=prompt('На сколько оцените его?');
//         if(d==''){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else if(d==prompt.isCancel){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else if(d.length>20){
//         e=false;
//         alert('ОШИБКА ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ');
//         } else{
//         e=true;
//         break;
//         }
//     }


// let personalMovieDB={
// count: numberOfFilms,
// movies:{},
// actors:{},
// genders:[],
// privat:false

// };

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
// console.log(personalMovieDB);

//     if(personalMovieDB.count <10.0){
//     alert("Просмотренно довольно мало фильмов");
// } else if(personalMovieDB=>10 && personalMovieDB<=30) {
//     alert('Вы классический зритель');
// } else if(personalMovieDB>30){
//     alert('Вы киноман');
// } else if(personalMovieDB.isEmpty||personalMovieDB.isCancel) {
//     alert('Произошла ошибка');
// }
  

/////////////////////////////////
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
//     console.log(personalMovieDB);
////////////////////////////////////////////////////////
// "use strict";
// let numberOfFilms; 

// function start() {
//  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//   }
  
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }

// } 

// detectPersonalLevel(); 

// function showMyDB(hidden){
//   if(!hidden){
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//   for(let i=1; i<=3; i++){
    
//     personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
//     // const genre=prompt(`Ваш любимый жанр под номером ${i}`);
//     //personalMovieDB.genres[i-1]=genre;
//   }
// }


