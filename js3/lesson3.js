// // -- створити об'єкт (не меньше 5ти властивостей) який описує

// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
// // const dog = {
// //     name: 'Jerry',
// //     age: '2',
// //     breed: 'shepherd',
// //     owner: 'Olja',
// //     paw: 4
// // };
// // console.log(dog);
// // const human = {
// //     name: "Olga",
// //     age: 33,
// //     daughter: true,
// //     job: undefined,
// //     gender: 'female'
// // };
// // console.log(human);
// // const car = {
// //     brand: 'BMW',
// //     age: 5,
// //     door: 4,
// //     model: 2000,
// //     type: 'sedan'
// // };
// // console.log(car);

// // const apartment = {
// //     square: 45,
// //     room: 2,
// //     window: 3,
// //     address: 'Lvivska',
// //     city: 'Lviv'
// // };
// // console.log(apartment);

// // const book = {
// //     title: 'Kazky',
// //     page: 255,
// //     edition: 1000,
// //     genre: 'kazka',
// //     avtor: 'Uliana'
// // };
// // console.log(book);


// // -- Створити масив та вивести його в консоль:

// // - з 5 собак
// // const dogarr = ['Jerry', 'Jessy', 'Sharik', 'Tuzik', 'Brovko'];
// // console.log(dogarr);

// // // - 3 5 людей
// // const people = ['Olya', 'Anna', 'Igor', 'Dima', 'Roma'];
// // console.log(people);
// // // - з 5 автомобілів
// // const cars = ['BMV', "VW", 'Opel', 'Toyota', 'Renaut'];
// // console.log(cars);

// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// // const house = {
// //     address: {
// //         street: 'Shevchenk',
// //         numer: 27
// //     },
// //     flat: 10,
// //     room: [ 
// //         'kitchen',
// //         'badroom',
// //         'bathroom'
// //     ],
// //     material: {
// //         wall: 'brick',
// //         roof: 'wood'
// //     },
// //     floor: 5,
// //     age: 50
// // }
// // console.log(house);

// // - водій
// // const driver = {
// //     name: {
// //       name: 'Oleg',
// //       surname: 'Ivanov'  
// //     },
// //     age: 25,
// //     bday: 'february',
// //     address: [
// //         'Lvivska',
// //         11,
// //         21
// //     ],
// //     phone: '0966545945'
// // };
// // console.log(driver);
// // // - іграшку
// // const toy = {
// //     material: 'plastik',
// //     gender: [
// //         'male',
// //         'female'
// //     ],    
// //     kind: 'construktor',
// //     age: {
// //        age1: 1,
// //        age2: 1,
// //        age3: 1,
// //     }
// // }
// // console.log(toy);

// // // - стіл
// // const table = {
// //     material: [
// //         'plastik',
// //         'wood',
// //         'metal'
// //     ],
// //     form: {
// //         square: true,
// //         round: false
// //     },
// //     age: 2,
// //     price: 152,
// //     title: 'table'
// // }
// // console.log(table);

// // // - сумка
// // const bag = {
// //     age: 1,
// //     material: [
// //         'skin',
// //         'leatherette',
// //     ],
// //     category: 'new',
// //     price: {
// //         hight: 123,
// //         low: 100
// //     },
// //     gender: 'female'
// // }
// // console.log(bag);


// // // Дан массив:
// // const users = [
// // 				{name: 'vasya', age: 31, status: false},
// // 				{name: 'petya', age: 30, status: true},
// // 				{name: 'kolya', age: 29, status: true},
// // 				{name: 'olya', age: 28, status: false},
// // 				{name: 'max', age: 30, status: true},
// // 				{name: 'anya', age: 31, status: false},
// // 				{name: 'oleg', age: 28, status: false},
// // 				{name: 'andrey', age: 29, status: true},
// // 				{name: 'masha', age: 30, status: true},
// // 				{name: 'olya', age: 31, status: false},
// // 				{name: 'max', age: 31, status: true}
// // 			];
// // // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // // - статус Андрія
// // console.log(users[7].status);

// // // - статус Максима
// // console.log(users[4].status);

// // // - ім'я передостаннього об'єкту
// // console.log(users.length);
// // for (let i = 0; i < users.length; i++) {    
// // }
// // console.log(users[(users.length)-2].name);

// // // - ім'я третього об'єкта
// // console.log(users[2].name);

// // // - вік Олега
// // console.log(users[6].name);

// // // - вік Олі
// // console.log(users[9].age);

// // // - вік + ім'я 5го об'єкта
// // console.log((users[4].age)+' '+(users[4].name));

// // // - вік + сатус Анни
// // console.log((users[5].age)+' '+(users[5].status));
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // // - отримує текст з параграфа з id "content"
// let content = document.getElementById("content");
// console.log(content.textContent);
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById("rules");
// console.log(rules.textContent);


// // - замініть текст параграфа з id 'content' на будь-який інший
// // document.getElementById("content").textContent = 'Привіт';

// // - замініть текст параграфа з id 'rules' на будь-який інший
// // document.getElementById("rules").textContent = 'Мене звати Оля';

// // - змініть кожному елементу колір фону на червоний
// // let p = document.getElementsByTagName('p');
// // console.log(p);
// // for (let i = 0; i < p.length; i++) {
// //     p[i].style.backgroundColor = 'red';  
// // };
// // let divEl = document.getElementsByTagName('div');
// // for (let i = 0; i < divEl.length; i++) {
// //     divEl[i].style.backgroundColor = 'red';   
// // };
// // let ulEl = document.getElementsByTagName('ul');
// // for (let i = 0; i < ulEl.length; i++) {
// //     ulEl[i].style.backgroundColor = 'red';  
// // };

// // - змініть кожному елементу колір тексту на синій
// // for (let i = 0; i < p.length; i++) {
// //     p[i].style.color = 'blue';  
// // };
// // for (let i = 0; i < divEl.length; i++) {
// //     divEl[i].style.color = 'blue';
// // };
// // for (let i = 0; i < ulEl.length; i++) {
// //     ulEl[i].style.color = 'blue';  
// // }
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
      let rules = document.getElementById('rules');
      console.log(rules.classList);




// - отримати всі елементи з класом fc_rules
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);

// // - поміняти колір тексту у всіх елементів fc_rules на червоний (в мене білий)
// // for (let i = 0; i < fc_rules.length; i++) {
// //     fc_rules[i].style.color = 'white';
    
// // }


// // ====================
// // ====================
// // ====================

// // =================
// // =====class=======
// // =================
// // Взяти файл template_2.html та працювати в ньому
// // - Напишіть код, який :
// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
// // let main_header = document.getElementById('main_header');
// // main_header.style.color = 'green';
// // console.log(main_header);

// // // -- робить шириниу елементу ul 400 пікселів
// // let newUl = document.getElementsByTagName('ul');
// // for (let i = 0; i < newUl.length; i++) {
// //     newUl[i].style.width = '400px';
// // };
// // console.log(newUl);
// // // -- робить шириниу всіх елементів з класом linkList шириною 50%
// // let linkClass = document.getElementsByClassName('linkList');
// // for (let i = 0; i < linkClass.length; i++) {
// //     linkClass[i].style.width = '50%'; 
// // }
// // console.log(linkClass);

// // -- отримує текст який зберігається в елементі з класом listElement2
// // let listElement2 = document.getElementsByClassName('listElement2');
// // for (const i of listElement2) {

// // } console.log(listElement2.textContent);
// // або
// // for (let i = 0; i < listElement2.length; i++) {   
// // } console.log(listElement2.textContent);
// // -- отримує всі елементи li та змінює ім колір фону на сірий
// // let liEl = document.getElementsByTagName('li');
// // for (let i = 0; i < liEl.length; i++) {
// //     liEl[i].style.backgroundColor = 'gray';
    
// // } console.log(liEl);
// // -- отримує всі елементи 'a' та додає їм клас anchor
// // let anchor = document.getElementsByTagName('a');
// // for (let i = 0; i < anchor.length; i++) {
// //   anchor[i].classList.add('anchor') 
// // }
// //   console.log(anchor);  


// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//    if(a[i].textContent==='link3') {
//        a[i].style.fontSize = '40px';
//    }

// }
//   console.log(a);  

// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// // let a1 = document.getElementsByTagName('a');
// // for (let i = 0; i < a1.length; i++) {
// //     a1[i].classList.add('element_XXX');
// //     a1[i].textContent='XXX'
    
// // }
// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // let sub = document.getElementsByClassName('sub-header');
// // for (let i = 0; i < sub.length; i++) {
// //     sub[i].style.backgroundColor = prompt('Введіть колір фону'); 
// //     if (sub[i].textContent === 'content 2 segment') {
// //         sub[i].style.color = prompt("Введіть колір тексту")
// //     }
// // } console.log(sub);

// // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// // let content_1 = document.getElementsByClassName('content_1');
// // for (let i = 0; i < content_1.length; i++) {
// //     content_1[i].textContent = prompt('Введіть довільний текст')    
// // }
// // -- отримати елементи p та змінити їм paddin на довільне значення
// // let pp = document.getElementsByTagName('p');
// // for (let i = 0; i < pp.length; i++) {
// //  pp[i].style.padding = '20px';
    
// // }console.log(pp);
// // -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text2 = document.getElementsByClassName('text2');
// for (let i = 0; i < text2.length; i++) {
//     text2[i].textContent = 'довільне значення))'
    
// }
