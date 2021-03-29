// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// const div = document.createElement('div');
// div.id = 'text';
// div.innerText = 'ffsdfwaefee';
// document.body.appendChild(div);
//
// const button = document.createElement('button');
// button.id = 'btn';
// button.textContent = 'hide'
// document.body.appendChild(button);
//
// const hide = document.getElementById('btn');
// hide.onclick = (ev) => {
//     let text = document.getElementById('text');
//     text.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.createElement('button');
// button.textContent = "Кнопка";
// document.body.appendChild(button);
//
// button.onclick = (ev)=>{
//     button.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
// та повідомити про це користувача

// const input = document.createElement('input');
// input.type = 'number';
// input.id = 'inp';
// document.body.appendChild(input);
//
// const button = document.createElement('button');
// button.textContent = 'Кнопка';
// document.body.appendChild(button);
//
// button.onclick = (ev) => {
//     let age = document.getElementById("inp");
//     let value = age.value;
//     if(value>=18){
//         alert("Hello!")
//     }
//     alert("Bue!")
//
// }



// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.createElement('div')
// menu.innerText = "Меню"
// menu.id = 'menu';
// const ul = document.createElement('ul')
// ul.id = 'point'
// for (let i = 1; i < 4; i++) {
//     const li = document.createElement('li');
//     li.id = 'point'
//     li.innerText = `${i}пункт`
//
//     ul.appendChild(li);
// };
//
// document.body.appendChild(menu);
// document.body.appendChild(ul);
//
// const clickMenu = document.getElementById('menu');
// const hidePoint = document.getElementById('point')
// let flag = false;
// clickMenu.onclick = (ev)=>{
//
//         if(flag){
//             hidePoint.style.display = "block";
//             flag = false;
//         } else {
//             hidePoint.style.display = 'none';
//             flag = true;
//         }
//
//
// };
// const a1 = document.getElementById('a1');
// const subMenu = document.getElementById('subMenu');
// let flag = false;
// a1.onclick = ev =>{
//     if(flag){
//         subMenu.style.display = 'block';
//         flag = false;
//     } else{
//         subMenu.style.display = 'none';
//         flag = true;
//     }
// }




// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// const text = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// text.forEach(item=> {
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');
//     h3.innerText = item.title;
//     p.innerText = item.body;
//     div.appendChild(h3);
//     div.appendChild(p);
//     document.body.appendChild(div);
//
//     const btn = document.createElement('button');
//     document.body.appendChild(btn);
//
//     btn.textContent = 'Закрити';
//
//     btn.onclick = ev =>{
//
//             p.style.display = 'block';
//
//
//     }
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const div = document.createElement('div');
// for (let i = 0; i < 2; i++) {
//     const formInp = document.createElement('form');
//     formInp.id = 'form';
//     for (let i = 0; i < 2; i++) {
//         const input = document.createElement('input');
//         input.type = 'text'
//         input.className = `input`;
//         formInp.appendChild(input);
//         console.log(input);
//
//     }
//     div.appendChild(formInp);
//
// }
// document.body.appendChild(div);
//
//
// const button = document.createElement('button');
// button.id = 'btn';
// button.textContent = "Send";
// document.body.appendChild(button);
// const btn = document.getElementById('btn');
//
// btn.onclick = ev =>{
//     const inp = document.getElementsByClassName(`input`)
//     for (const item of inp) {
//        console.log(item.value);
//     }
// }



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// const div = document.createElement('div');
// document.body.appendChild(div);
// const createTable = function (rows,cols,tag){
// const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td')
//             td.innerText = i.toString()+j.toString();
//             tr.appendChild(td);
//         }
//             table.appendChild(tr)
//     }
//    tag.appendChild(table);
// }
// createTable(2,3,div);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)




// const input1 = document.createElement('input');
// input1.type = 'number';
//
// const input2 = document.createElement('input');
// input2.type = 'number';
//
// const input3 = document.createElement('input');
// input3.type = 'text';
// document.body.appendChild(input1);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
//
//
//
// const button = document.createElement('button');
// button.textContent = "Create";
// document.body.appendChild(button);
//
//
// const createTable = function (rows,cols,text){
//     const div = document.createElement('div');
//
// const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td')
//             td.textContent = text;
//             tr.appendChild(td);
//         }
//             table.appendChild(tr)
//     }
//     div.appendChild(table);
//     document.body.appendChild(div);
// }
//
//
// button.onclick =(ev)=> {
//     createTable(input1.value, input2.value, input3.value);
// }
//



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// const imageArray = [
//     {
//         id:1,
//         url: '61e5ddce35cd9381e11de8f0257a88a302777bcc.jpg'
//     },
//     {
//         id:2,
//         url: '322868_1100-1100x628.jpg'
//     },
//     {
//         id:3,
//         url: 'cute-dog-headshot.jpg'
//     },
//     {
//         id:4,
//         url: 'dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
//     },
//     {
//         id:5,
//         url: 'golden-retriever-royalty-free-image-506756303-1560962726.jpg'
//     }
// ];
//
// const div = document.createElement('div');
//
//
// const img = document.createElement('img');
// img.width = 300;
//
//
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
//
// btn1.textContent = "Left";
// btn2.textContent = "Right";
//
// let index=0
// img.src = imageArray[index].url;
//
// div.appendChild(img);
// div.appendChild(btn1);
// div.appendChild(btn2);
//
//
// document.body.appendChild(div);
//
//
// btn1.onclick = ev => {
//     index-1<0
//     ? index = imageArray.length-1
//     : index = index-1
//
//     img.src = imageArray[index].url
// }
//
// // btn1.onclick = ev => {
// //    if (index-1<0){
// //        index = 1
// //    } else {
// //    index = imageArray.length-1;
// // }
// // img.src = imageArray[index].img_url
// // }
//
// btn2.onclick = ev => {
//     index+1>imageArray.length-1
//         ? index = 0
//         : index = index+1
//
//     img.src = imageArray[index].url
// }
//
//
//
//


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// const badWords = ["shit", 'fuck', 'bitch', 'asshole', 'dumb'];
//
// const div = document.createElement('div');
// const input = document.createElement('input');
// input.type = 'text';
// const button = document.createElement('button');
// button.textContent = "Check"
// div.appendChild(input);
// div.appendChild(button);
// document.body.appendChild(div);
//
// button.onclick = ev => {
//     for (const item of badWords ) {
//         if(input.value === item){
//             alert('You write incorrect word')
//         }
//     }
//
// }


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// const badWords = ["shit", 'fuck', 'bitch', 'asshole', 'dumb'];

// const div = document.createElement('div');
// const input = document.createElement('input');
// input.type = 'text';
// const button = document.createElement('button');
// button.textContent = "Check"
// div.appendChild(input);
// div.appendChild(button);
// document.body.appendChild(div);
//
// button.onclick = ev => {
//     for (const item of badWords ) {
//         if(input.value.includes(item)){
//             alert('You write incorrect word')
//         }
//     }
//
// }


// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const arrayH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (let i = 0; i < arrayH2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let anchor = 'anchor'+i;
//     a.href = '#'+anchor;
//     arrayH2[i].setAttribute('id', anchor);
//     a.innerHTML = arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// };
// content.appendChild(ul);
// content.style.width = '30%';
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left'
//



// -- взять массив пользователей
// const usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// const userContent = document.createElement('div');
// const userDiv = document.createElement('div');
// userDiv.className = 'user'
// userDiv.appendChild(printUser(usersWithAddress));
//
// function printUser(array) {
//     const mainDiv = document.createElement('div');
//     array.forEach(item => {
//         const div = document.createElement('div');
//         div.innerHTML = JSON.stringify(item);
//         mainDiv.appendChild(div);
//
//     })
//     return mainDiv
// };
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
//
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
//
// input1.id = 'input1';
// input2.id = 'input2';
// input3.id = 'input3';
//
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
//
// label1.innerText = 'пользователь со статусом false';
// label2.innerText = 'старше 29 лет';
// label3.innerText = 'город киев';
//
// label1.htmlFor = input1.id;
// label2.htmlFor = input2.id;
// label3.htmlFor = input3.id;
//
// const button = document.createElement('button');
// button.textContent = 'Filter';
//
// button.onclick = ev => {
//     let userArr = JSON.parse(JSON.stringify(usersWithAddress));
//
//     if (input1.checked) userArr = userArr.filter(value => !value.status);
//     if (input2.checked) userArr = userArr.filter(value => value.age >=29);
//     if (input3.checked) userArr = userArr.filter(value => value.address.city === 'Kyiv');
//
//     userDiv.innerHTML = '';
//     userDiv.appendChild(printUser(userArr));
// }
//
// userContent.appendChild(userDiv);
// userContent.appendChild(input1);
// userContent.appendChild(label1);
// userContent.appendChild(input2);
// userContent.appendChild(label2);
// userContent.appendChild(input3);
// userContent.appendChild(label3);
// userContent.appendChild(button);
//
//
// document.body.appendChild(userContent)


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// const text = document.getElementById('text');
//
// text.onmouseup = function (){
//     let area = document.getSelection().toString();
//     this.innerHTML = this.innerText.replace(area, `<i>${area}</i>`)
// }
