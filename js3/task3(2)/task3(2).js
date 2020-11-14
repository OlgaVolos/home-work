//1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// const apple = {
//     color: 'red',
//     sort: 'Antonivka',
//     area: 'Dacha'
// };
// const cat = {
//     nik: 'Rudyk',
//     paw: 4,
//     tail: true
// };
// const phone = {
//     trademark: 'Xiaomi',
//     model: 'Redmi Note 7',
//     memory: 64
// };
// const dog = {
//     age: 5,
//     owner: 'Ulja',
//     toy: 'ball'
// };
// const house = {
//     floor: 5,
//     flat: 16,
//     city: 'Lviv'
// };


// //2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// const me = {
//     name: 'Olja',
//     child: ['Uliana', 10],
//     address: {city: 'chervonograd', street: 'Shevchenka'}
// };
// const Uliana = {
//     name: {name: 'Uliana', surname: 'Topilnytska'},
//     age: 10,
//     school: [1, 4]
// };
// const dacha = {
//     title: 'Zastava',
//     tree: ['apple', 'peach', 'pear'],
//     plants: {bush: 'raspberry', vegetable: 'carrot'}
// };
// const leptop = {
//     title: {name: 'HP', model: 'Inspiron'},
//     memory: [128, 1000],
//     color: 'black'
// };
// let table = {
//     year: 2010,
//     color: ['white', 'black'],
//     description: {material: 'wood', form: 'square' }
// }


// 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const key in apple) {
//     if (apple.hasOwnProperty(key)) {

//     } console.log(key);
// };
// for (const key in cat) {
//     if (cat.hasOwnProperty(key)) {
             
//     }console.log(key);
// };
// for (const key in phone) {
//     if (phone.hasOwnProperty(key)) {
        
//     } console.log(key);
// }

// for (const i in dog) {
//     if (dog.hasOwnProperty(i)) {  
//     } console.log(i);
// } 

// for (const i in house) {
//     if (house.hasOwnProperty(i)) {
     
//     }console.log(i);
// } 

// for (const i in me) {
//     if (me.hasOwnProperty(i)) {     
//     }console.log(i);
// }  

// for (const i in Uliana) {
//     if (Uliana.hasOwnProperty(i)) {        
//     }console.log(i);
// } 

// for (const i in dacha) {
//     if (dacha.hasOwnProperty(i)) {
    
//     }console.log(i);
// } 

// for (const i in leptop) {
//     if (leptop.hasOwnProperty(i)) {
       
//     }console.log(i);
// } 

// for (const i in table) {
//     if (table.hasOwnProperty(i)) {
//     } console.log(i);
// } 
//4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let a = Object.keys(apple);
// console.log(a);

// let b = Object.keys(cat);
// console.log(b);

// let c = Object.keys(phone);
// console.log(c);
// let d = Object.keys(dog);
// console.log(d);

// let e = Object.keys(house);
// console.log(e);

// let f = Object.keys(me);
// console.log(me);

// let g = Object.keys(Uliana);
// console.log(g);

// let h = Object.keys(dacha);
// console.log(h);

// let j = Object.keys(leptop);
// console.log(j);

// let k = Object.keys(table);
// console.log(k);
// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
const car = [
    { 
        model: 'BMW',
        year: 2005,
        power: 1500,
        color: 'red' 
    },
    {
        model: 'Opel',
        year: 2018,
        power: 2500,
        color: 'silver'  
    },
    {
        model: 'Mersedes-Benz',
        year: 2014,
        power: 3000,
        color: 'white' 
    },
    {
        model: 'VW',
        year: 2019,
        power: 1800,
        color: 'green' 
    },
    {
        model: 'Volvo',
        year: 2003,
        power: 1200,
        color: 'red' 
    },
    {
        model: 'Waz',
        year: 1981,
        power: 1000,
        color: 'yellow' 
    },
    {
        model: 'xxx',
        year: 2010,
        power: 4500,
        color: 'blue' 
    },
    {
        model: 'aaa',
        year: 2020,
        power: 1500,
        color: 'white' 
    },
    {
        model: 'rrr',
        year: 2002,
        power: 1550,
        color: 'grey' 
    },
    {
        model: 'rye',
        year: 1999,
        power: 1900,
        color: 'orange' 
    }
];
// console.log(car);
// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
const cities = [
    {
        title: 'Lviv',
        population: 100500,
        country: 'Ukraine',
        region: 'Lviv Oblast'
    },
    {
        title: 'Kyiv',
        population: 250250,
        country: 'Ukraine',
        region: 'Kyiv Oblast' 
    },
    {
        title: 'Rivne',
        population: 89000,
        country: 'Ukraine',
        region: 'Rivne Oblast'
    }
];
// console.log(cities);
//7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
const cars = [
    {
        model: 'BMW',
        year: 2005,
        power: 1500,
        color: 'red',
        driver: {
            name: 'Svin',
            age: 18,
            gender: 'male',
            experience: 0
        }
    },
    {
        model: 'Volvo',
        year: 2003,
        power: 1200,
        color: 'red',
        driver: {
            name: 'Olja',
            age: 25,
            gender: 'female',
            experience: 5
        }
    },
    {
        model: 'rrr',
        year: 2002,
        power: 1550,
        color: 'grey',
        driver: {
            name: 'Dima',
            age: 35,
            gender: 'male',
            experience: 15
        }
    }
];
// console.log(cars);
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// 8- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i<car.length) {
//    console.log(car[i]);
//   i++;  
// };
// console.log('*********************');
// i=0;
// while (i<cities.length) {
    // console.log(cities[i]);
//     i++;
// };
// console.log('*********************');
// i=0
// while (i<cars.length) {
//     console.log(cars[i]);
//    i++;  
//  };

// 9- проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < car.length; i++) {
//     console.log(car[i]);    
// };
// console.log('*********************');
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// };
// console.log('*********************');
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);   
// }
// 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const i of car) {  
// console.log(i);
// };
// for (const i of cities) {
//     console.log(i);
// },
// for (const i of cars) {
//     console.log(i); 
// };

 
//11 - взять объекты из задания 1 и превратить каждый в json.
// let appleJ = JSON.stringify(apple);
// console.log(appleJ);
// let catJ = JSON.stringify(cat);
// let phoneJ =  JSON.stringify(phone);
// let dogJ = JSON.stringify(dog);
// let houseJ = JSON.stringify(house);


//12 - взять json из задания 11 и превратить их обратно в объекты.
// let cloneApple = JSON.parse(appleJ);
// console.log(cloneApple);
// let cloneCat = JSON.parse(catJ);
// let clonePhone = JSON.parse(phoneJ);
// let cloneDog = JSON.parse(dogJ);
// let cloneHouse = JSON.parse(houseJ)

//13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < car.length; i++) {
//     console.log(JSON.stringify(car[i])); 
// };

//14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cities.length; i++) {
//     const element = cities[i];
//     console.log(JSON.stringify(element));
// };

// 15- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// const newArr = [];
// for (let i = 0; i < cars.length; i++) {
//     newArr.push(JSON.stringify(cars[i]));
// }
// console.log(newArr);
// ;

//16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// const users = [
//     { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } },
//     { name: 'ananas', skills : ['java','js', 'css']  },
//     { name: 'jelly', skills : ['java'] , wife: { name: 'berry' } },
//     { name: 'orange', skills : ['js'] , wife: { name: 'banana' } },
//     { name: 'banan', skills : ['java','js', 'mongo'] , wife: { name: 'che' } }
// ];
// for (const i of users) {
//     console.log(i.name);
//     for (const j of i.skills) {
//         console.log(j);   
//     }
// }
//17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// const skillArr = [];
// for (const i of users) {
//     console.log(i.name);
//     for (const j of i.skills) {
//         skillArr.push(j);
//     }   
// } console.log(skillArr);

//18 - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [
//      {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//      {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//      {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//      {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//      {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

//  for (const i of users) {
//      console.log('name: ', i.name);
//      for (const j of i.skills) {
//          console.log(j);   
//      }   
//  };


//19 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//                 				name: 'vasya',
//                 				age: 31,
//                 				status: false,
//                 				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//                 			}, {
//                 				name: 'petya',
//                 				age: 30,
//                 				status: true,
//                 				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//                 			}, {
//                 				name: 'kolya',
//                 				age: 29,
//                 				status: true,
//                 				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//                 			}, {
//                 				name: 'olya',
//                 				age: 28,
//                 				status: false,
//                 				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//                 			}, {
//                 				name: 'max',
//                 				age: 30,
//                 				status: true,
//                 				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//                 			}, {
//                 				name: 'anya',
//                 				age: 31,
//                 				status: false,
//                 				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//                 			}, {
//                 				name: 'oleg',
//                 				age: 28,
//                 				status: false,
//                 				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//                 			}, {
//                 				name: 'andrey',
//                 				age: 29,
//                 				status: true,
//                 				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//                 			}, {
//                 				name: 'masha',
//                 				age: 30,
//                 				status: true,
//                 				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//                 			}, {
//                 				name: 'olya',
//                 				age: 31,
//                 				status: false,
//                 				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//                 			}, {
//                 				name: 'max',
//                 				age: 31,
//                 				status: true,
//                 				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//                 			}];
    
//  newArr = [];
// for (const i of users) {
//     newArr.push(i.address)
// };
// console.log(newArr);

//20 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
//     let divka = document.createElement('div');
//     let address = '1'
//     const user = users[i];
//     for (const key in user.address) {
//         address = address + ' ' + user.address[key];
//         } 
//         divka.innerText = (`${user.name}, ${user.age}, ${user.status}, ${address} `)
//         document.body.appendChild(divka);
//     }

     



//21 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     let divka = document.createElement('div');
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let address = ' '
//     for (const key in element.address) {
//         address = address + ' ' + element.address[key]     
//         }
//      h3.innerText = element.name;
//      p.innerText = element.age;
//      p1.innerText = element.status;
//      p2.innerText = address
//      div.appendChild(h3);
//      div.appendChild(p);
//      div.appendChild(p1);
//      div.appendChild(p2);
//      document.body.appendChild(div);
//     } 

    
//22 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     let divka = document.createElement('div') // загальна дівка
//     let block = document.createElement('div') // блок для юзера
//     let name = document.createElement('h3'); 
//     let age = document.createElement('p') ;
//     let status = document.createElement('p');
//     let address = document.createElement('div');
//      for (const i in element.address) {
//          let addr = document.createElement('div')
//          addr.innerText = element.address[i];
//          address.appendChild(addr);
//      }
//      name.innerText = element.name;
//      age.innerText = element.age;
//      status.innerText = element.status
//      block.appendChild(name);
//      block.appendChild(age);
//      block.appendChild(status);
//      block.appendChild(address);
//      divka.appendChild(block);
//      document.body.appendChild(divka);

// }
//             			

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false}, 
//             {id: 2, name: 'petya', age: 30, status: true}, 
//             {id: 3, name: 'kolya', age: 29, status: true}, 
//             {id: 4, name: 'olya', age: 28, status: false},];
            
//             let citiesWithId = [
//                 {user_id: 3, country: 'USA', city: 'Portland'}, 
//                 {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//                 {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//                 {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for (const i of usersWithId) {
//     for (const j of citiesWithId) {
//         if(i.id === j.user_id) {
//             i.address = j
//         }  
//     } 
// }console.log(usersWithId);

// Записати цей об'єкт в новий масив
// const newArr = [];
// newArr.push(usersWithId);
// console.log(newArr);
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// const div = document.createElement('div');
// div.innerText = 'Text';
// div.classList.add('class');
// div.id = 'name';
// document.body.appendChild(div)
// let a = document.getElementById('name');
// console.log(a.textContent);
// let bbb = document.getElementsByClassName('class');
// for (const element of b) {
//     console.log(element.textContent);
    
// }
// for (let i = 0; i < bbb.length; i++) {
    
//     console.log(bbb[i].textContent);
// }
// let ccc = document.getElementsByTagName('div');
// for (const elem of ccc) {
//     console.log(elem.textContent);
// }
// або
// for (let i = 0; i < ccc.length; i++) {
//     console.log(ccc[i].textContent);
// }
// // - змінити цей текст використовуючи селектори id, class,  tag
// a.innerText = "Привіт";
// for (const element of bbb) {
//     element.innerText = 'Хелоу';
    
// }
// for (const elem of ccc) {
//     elem.innerText = "hello"
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// a.style.width = '50px';
// a.style.height = '50px';
// for (const element of bbb) {
//     element.style.width = '60px';
//     element.style.height = '60px';

    
// }
// for (const elem of ccc) {
//     elem.style.width = "65px";
//     elem.style.height = '65px';

// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table = document.createElement('table');
// const aa = document.createElement('tr');
// const bb = document.createElement('td');
// const cc = document.createElement('td');
// const dd = document.createElement('td');
// aa.appendChild(bb); 
// aa.appendChild(cc); 
// aa.appendChild(dd); 
// table.appendChild(aa);
// document.body.appendChild(table);


// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table');

// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//         for (let i = 0; i < 3; i++) {
//     const td = document.createElement('td');
//     tr.appendChild(td);      
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table');

// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//         for (let i = 0; i < 5; i++) {
//     const td = document.createElement('td');
//     tr.appendChild(td);      
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// const table = document.createElement('table');
// let n = prompt('Кількість рядків')
// let m = prompt('Кількість чарунок')
// for (let i = 0; i < n; i++) {
//         const tr = document.createElement('tr');
//         for (let i = 0; i < m; i++) {
//         const td = document.createElement('td');
//     tr.appendChild(td);      
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - найти всі елементі, які мають class
// const search = document.getElementsByTagName('*')
// console.log(search);
// for (const el of search) {
//     if(el.getAttribute('id')){
//         console.log(el);
//     }
    
// }
// //  - знайти всі параграфи ,та змінити текст на hello oktenweb!
// const p = document.getElementsByTagName('p');
// for (const elem of p) {
//     elem.innerText = 'hello oktenweb!'
    
// }
// //  - знайти всі div та змінити ім колір на червоний
// const div = document.getElementsByTagName('div');
// for (const elem of div) {
//     elem.style.backgroundColor = 'red';
    
// }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// const arrH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const ul = document.createElement('ul');
// for (const elem of arrH2 ) {
//     const li = document.createElement('li');
//     li.innerText = elem.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);

    
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
const div = document.createElement('div');
div.id = 'wrap';
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const div1 = document.createElement('div');
    const divNumber = document.createElement('div');
    const divText = document.createElement('div');
    divNumber.innerText = rule.title;
    divText.innerText = rule.body;
    div1.appendChild(divNumber);
    div1.appendChild(divText);
    div.appendChild(div1)

} 


document.body.appendChild(div)





// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту