// - створити функцію яка виводить масив
// let array = [];
// function showArray(arr) {
//     console.log(arr);
// }
// showArray(array);



// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomArr(min, max, length) {
//     let array = []
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random()*(max-min)+min));
         
//     }
//     return array
        
//   }
//   const array1 = randomArr(1, 50, 10);
  
//   showArray(array1);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function returnMin(a, b, c) {
//     let min;

//     if(a < b && a < c) min = a;
//     if(b<a && b<c) min = b;
//     if(c<a && c<b ) min = c;
//     return min;
// }
// console.log(returnMin(32, 12, 40)); 
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function returnMax(a, b, c) {
//     let max;

//     if(a>b && a>c) max = a;
//     if(b>a && b>c) max = b;
//     if(c>a && c>b ) max = c;
//     return max;
// }
// console.log(returnMax(32, 12, 40)); 

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinMax() {
//     console.log(arguments)
//     let min = arguments[0];
//     let max = arguments[0]
//     for (const item of arguments) {
//         if (item < min) min = item;
//         if(item > max) max = item;
        
//     } console.log(max);
//     return min
    
// }
// console.log(returnMinMax(25, 5, 13));

// - створити функцію яка виводить масив
// function array() {
//     console.log(arguments);
// }
// console.log(array(23, 12, 'hdhjd'));
// - створити функцію яка повертає найбільше число з масиву
// function returnMax() {
//     let max = arguments[0]
//     for (const item of arguments) {
//         if(item > max) max = item;
        
//     } 
//     return max
    
// }
// console.log(returnMax(25, 55, 13));

// let returnMax = (array) => {
//     let max = array[0]
//     for (const item of array) {
//         if(item > max) max = item;  
//     } 
//     return max
    
// }
// console.log(returnMax([12, 65, 78, 451, 12, 1]));

// - створити функцію яка повертає найменьше число з масиву
// let returnMin = (array) => {
//     let min = array[0];
//     for (const i of array) {
//         if( i < min) min = i;
        
//     } return min
// }
// console.log(returnMin([5, 45, 3, 7]));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumator(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;  
//     } 
//     return sum;
// } console.log(sumator([2, 4, 4]));

// let calc = 0;
// let sumator = (sum) => {
//     for (const el of sum) {
//         calc += el;
//     } 
// return calc
// }
// console.log(sumator([1, 2, 3]));

// let a = [1, 2, 3]
// let sum = 0;
// for (const i of a) {
//    sum  += i;  
  
// } console.log(sum); 

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumator(array) {
//         let sum = 0;
//         let ar = 0;
//         for (const item of array) {
//             sum += item;
//             ar = sum/array.length;  
//         } 
//         return ar;
//     } console.log(sumator([2, 4, 4]));
    
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const rules = [
//     				{
//     					title: 'Первое правило Бойцовского клуба.',
//     					body: 'Никому не рассказывать о Бойцовском клубе.'
//     				},
//     				{
//     					title: 'Второе правило Бойцовского клуба.',
//     					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     				},
//     				{
//     					title: 'Третье правило Бойцовского клуба.',
//     					body: 'В схватке участвуют только двое.'
//     				},
//     				{
//     					title: 'Четвертое правило Бойцовского клуба.',
//     					body: 'Не более одного поединка за один раз.'
//     				},
//     				{
//     					title: 'Пятое правило Бойцовского клуба.',
//     					body: 'Бойцы сражаются без обуви и голые по пояс.'
//     				},
//     				{
//     					title: 'Шестое правило Бойцовского клуба.',
//     					body: 'Поединок продолжается столько, сколько потребуется.'
//     				},
//     				{
//     					title: 'Седьмое правило Бойцовского клуба.',
//     					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     				},
//     				{
//     					title: 'Восьмое и последнее правило Бойцовского клуба.',
//     					body: 'Новичок обязан принять бой.'
//     				},
    
//     			];
// function numOb(arrayO) {
// let count = 0;
//     for (const key of arrayO) {
//         if (typeof key === 'object') {
//         count++;
//         }   
//     }
//     return count;
// } 
        
//    console.log(numOb(rules));


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const rules = [
// 	{
// 		title: 'Первое правило Бойцовского клуба.',
// 		body: 'Никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Второе правило Бойцовского клуба.',
// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 	},
// 	{
// 		title: 'Третье правило Бойцовского клуба.',
// 		body: 'В схватке участвуют только двое.'
// 	},
// 	{
// 		title: 'Четвертое правило Бойцовского клуба.',
// 		body: 'Не более одного поединка за один раз.'
// 	},
// 	{
// 		title: 'Пятое правило Бойцовского клуба.',
// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
// 	},
// 	{
// 		title: 'Шестое правило Бойцовского клуба.',
// 		body: 'Поединок продолжается столько, сколько потребуется.'
// 	},
// 	{
// 		title: 'Седьмое правило Бойцовского клуба.',
// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 	},
// 	{
// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
// 		body: 'Новичок обязан принять бой.'
// 	},

// ];
// function numbersOfFields(array) {
// 	let count = 0;
// 	for (const key of array) {
// 		if (typeof key === 'object') {
// 			for (const number in key) {
// 			count ++
	
// 			}
// 		}
// 	}
// 	return count
// }
// console.log(numbersOfFields(rules));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// const array1 =  [1,2,3,4];
// const array2 =  [2,3,4,5];
// const sumArray = [];
// for (let i = 0; i < array1.length; i++) {

// 	sumArray.push(array1[i] + array2[i])
// } 
// console.log(sumArray);	



// function sum (array1, array2) {
// 	const sumArray = [];
// 	for (let i = 0; i < array1.length; i++) {
		
// 		sumArray.push(array1[i] + array2[i])	
// 	}
// 	return sumArray
// }
// const result = sum ([1,2,3,4], [2,3,4,5])
// console.log(result);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// const div = document.createElement('div')
// div.innerText = 'Hello owu'
// document.body.appendChild(div)

// function helloOwu(message){
// 	const div = document.createElement('div');
// 	div.innerText = message
// 	document.body.appendChild(div)

// } helloOwu('Hello owu');


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addEl(message, tag) {
// 	const block = document.createElement(tag);
// 	block.innerText = message;
// 	document.body.appendChild(block);
// } 
// addEl('Hello owu', 'div');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
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
// function listCars(array, typeTag){
// 	const block = document.createElement(typeTag);
// 	block.id = 'list';
// 	const ul = document.createElement('ul');
// 	for (let i = 0; i < array.length; i++) {
// 		const carModel = array[i];
// 		const li = document.createElement('li');
// 		li.innerText = `${i+1}  ${carModel.model}`;
// 		ul.appendChild(li);
// 	}
// 	block.appendChild(ul);
// 	document.body.appendChild(block);
// }
// listCars(car, 'div')



// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function blockForCar (array, typeTag, idTag) {
// 	const block = document.createElement(typeTag);
// 	block.id = idTag
	
// 	for (let i = 0; i < array.length; i++) {
// 		const value = array[i];
// 		const div = document.createElement(typeTag);
// 		div.innerText = `${value.model}, ${value.year}, ${value.power}, ${value.color}`;
// 		block.appendChild(div)
// 	}
// 	document.body.appendChild(block);

// } blockForCar(car, 'div', 'list');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function carsList (array, idTag) {
// 	const block = document.createElement('div');
// 	block.id = idTag;
// 	const ul = document.createElement('ul');
// 	for (let i = 0; i < array.length; i++) {
// 		const value = array[i];
// 		const li = document.createElement('li');
// 		const year = document.createElement('h3');
// 		const power = document.createElement('h4');
// 		const color = document.createElement('h5');

// 		li.innerText = `${i+1} ${value.model}`;
// 		year.innerText = `${value.year}`;
// 		power.innerText = `${value.power}`;
// 		color.innerText = `${value.color}`;
// 		li.appendChild(year);
// 		li.appendChild(power);
// 		li.appendChild(color);
// 		ul.appendChild(li);
// 	}
// 	block.appendChild(ul);
// 	document.body.appendChild(block);
// }
// carsList(car, 'list');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function splitArr(array1, array2){
// 	const newArr = [];
// 	newArr.push(array1);
// 	for (const item of array1) {
// 		for (const key of array2) {
// 			if(item.id === key.user_id){
// 				item.city = key.city;
// 			}			
// 		}	
// 	} 
// 	return newArr
// } console.log(splitArr(usersWithId, citiesWithId));

// Частковий приклад реультату:

// console.log(navigator.getUserMedia.usb);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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
function clubRules (array, numberRules, rule){
	const div = document.createElement('div');
div.id = 'wrap';
for (let i = 0; i < array.length; i++) {
	const rule = rules[i];
    const div1 = document.createElement('div');
    const number = document.createElement('h3');
    const text = document.createElement('p');
    number.innerText = rule.title;
    text.innerText = rule.body;
    div1.appendChild(number);
    div1.appendChild(text);
    div.appendChild(div1);	
}
} clubRules(rules, rules.title, rules.body);
// l`123yui;
// 12

// /.m const div = document.createElement('div');
// div.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     const div1 = document.createElement('div');
//     const Number = document.createElement('h3');
//     const Text = document.createElement('p');
//     Number.innerText = rule.title;
//     Text.innerText = rule.body;
//     div1.appendChild(Number);
//     div1.appendChild(Text);
//     div.appendChild(div1)

// } 


// document.body.appendChild(div)

// // "

// // ===========додаткове від віктора========
// // 1) Точная степень двойки.
// // Дано натуральное число N.
// // Выведите слово YES, если число N является точной степенью двойки,
// // или слово NO в противном случае.
// // Операцией возведения в степень пользоваться нельзя!

// // 2) Deep Copy
// // реалізувати глибоке копіювання обєкту за допомогою рекурсій

// // 3) Flat
// // Вирівняти багаторівневий масив в однорівневий
// // [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// // ===========додаткове========
