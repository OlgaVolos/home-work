// --створити масив та вивести його в консоль:
// - з 5 числових значень
// let number = [1, 2, 3, 4, 5];
// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);
// console.log(number);


// - з 5 стічкових значень
// let str = ['dog', 'cat', 'car', 'doll', 'ball'];
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str);

// - з 5 значень стрічкового, числового та булевого типу
// let group = ['dog', 25, true, false, 15];
// console.log(group[0]);
// console.log(group[1]);
// console.log(group[2]);
// console.log(group[3]);
// console.log(group[4]);
// console.log(group);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = [];
// empty[5] = 'dog';
// empty.push(15);
// empty.unshift('cat')
// console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let block = [];
// for (let i = 0; i<10; i++) {
// 	document.write('<div>Hello!</div>')
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині 
// let block = [];

// for (let i = 1; i<=10; i++) {
// 	document.write(`<div>number${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let block3 = [];
// let i = 0
// while (i<20) {
// 	document.write('<h1>Привіт</h1>');
// 	i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let block4 = [];
// let i = 1
// while (i<=20) {
// 	document.write(`<h1>Привіт ${i}</h1>`);
// 	i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let masuv1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i=0; i<masuv1.length; i++) {
// 	console.log(masuv1[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let masuv2 = ['o', 'w', 'e', 'r', 't', 'y', 't', 'g', 'd', 's'];
// for (let i=0; i<masuv2.length; i++) {
// 	console.log(masuv2[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let masuv3 = ['o', 1, true, 'r', 't', 99, 't', false, 'd', 's'];
// for (let i=0; i<masuv3.length; i++) {
// 	console.log(masuv3[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let masuv = ['o', 1, true, 'r', 't', 99, 't', false, 'd', 's'];
// for(i=0; i<masuv.length; i++) {
//     if(typeof masuv[i] === 'number') {
//         console.log(masuv[i])
//     }
// }



// - Створити масив з 10 елементів числового, стірчкового і булев	ого типу. За допомогою if та typeof вивести тільки числові елементи

// for (i=0; i< masuv.length; i++) {
//     if (typeof masuv[i] === 'boolean') {
//         console.log(masuv[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let masuv = ['o', 1, true, 'r', 't', 99, 't', false, 'd', 's'];
// for(i=0; i<masuv.length; i++) {
//     if(typeof masuv[i] === 'string') {
//         console.log(masuv[i])
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
// emptyArr[0] = 12;
// emptyArr[1] = 123;
// emptyArr[2] = true;
// emptyArr[3] = "12";
// emptyArr[4] = 'qrh';
// emptyArr[5] = false;
// emptyArr[6] = 25;
// emptyArr[7] = 123,5;
// emptyArr[8] = 'olja';
// emptyArr[9] = 7849654;
// console.log(emptyArr)


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<10; i++){
// 	console.log(i);
// 	document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i++){
// 	console.log(i);
// 	document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i+=2){
// 	console.log(i);
// 	document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i=0; i<100; i++){
// 	if(i % 2 === 0) {
// 		console.log(i);
// 		document.write(i);
// 	}
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i=0; i<100; i++){
// 	if(i % 2 === 1) {
// 		console.log(i);
// 		document.write(i);
// 	}
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let str ='';
// for (i=0; i<abc.length; i++){
//     str = str + abc[i];
// } console.log(str);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let str ='';
// let i = 0;
// while (i<abc.length) {
//     str = str + abc[i];
//     i++;
// } console.log(str);

   

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let str ='';
// for (const i of abc) {
//     str = str + i;
//    } console.log(str);
     

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// for (const key in abc) {
//     if (abc.hasOwnProperty(key)) {
//         const element = abc[key];
//         str = str + abc[key];
       
//     }
// }console.log(str) 

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let block = ['a', 'b', 'c'];
// for (let i = 1; i <= block.length; i++) {
//     block.push (1, 2, 3);
//     console.log(block);
// }

 

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let block = [1, 2, 3];
// newBlock = block.reverse();
// console.log(newBlock);
// let block = [1, 2, 3];
// for (let i = 3; i>=0; i--) {
//     console.log(block[i]);
// }


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let block = [1, 2, 3];
// block.push (4, 5, 6);
// console.log(block)  

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let block = [1, 2, 3];
// block.unshift (4, 5, 6);
// console.log(block)  

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let block = ['js', 'css', 'jq'] 
// let b = block.shift();
// console.log(b);
// console.log(block)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let block1 = ['js', 'css', 'jq'] 
// let a = block1.pop();
// console.log(a)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let block = [1, 2, 3, 4, 5];
// let b = block.slice(3);
// console.log(b)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let block = [1, 2, 3, 4, 5];
// let b = block.slice(0, 2);
// console.log(b)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let block = [1, 2, 3, 4, 5];
// let b = block.splice(1, 2);
// console.log(block)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let block = [1, 2, 3, 4, 5];
// let b = block.splice(3, 0, 'a', 'b', 'c');
// console.log(block)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let block = [1, 2, 3, 4, 5];
// let b = block.splice(1, 0, 'a', 'b');
// let c = block.splice(6, 0, 'c');
// let d = block.splice(8, 0, 'e');
// console.log(block)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let block = [1, 6, 48, 33, 4, 5, 14, 7, 21, 37]
// for (let i = 0; i < block.length; i++) {
//     if (block[i]%2 === 0) {
//     console.log(block[i])
//     }  
// }



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let block = [1, 6, 48, 33, 4, 5, 14, 7, 21, 37];
// let block1 = []
// for (let i = 0; i < block.length; i++) {
//     block1.push(block[i])
    
// } console.log(block1)



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let block = [1, 6, 48, 33, 4, 5, 14, 7, 21, 37];
// let block1 = []
// for (let i = 0; i < block.length; i++) {
//     block1[i] = block[i]
    
// } console.log(block1)

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,61,6,100,-18]та:
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// 1. перебрати його циклом while
// let i = 0
// while (i<block.length) {
//         i++;
//         console.log(block[i]);
// }




// 2. перебрати його циклом for
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (i=0; i<block.length; i++)
//     console.log(block[i]);
// }
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i = block.length; i>=0; i--) {
//     console.log(block[i]);
// }
    
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// let i=0;
//     while (i<block.length) {
//         if (i%2===1) {  
//         console.log(block[i])    
//        } i++ 
//     }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i = 0; i < block.length; i++) {
//     if (i%2===1) {
//         console.log(block[i])
//     }
//  }
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i = block.length; i>=0; i--) {
//     if (i%2===1) {
//     console.log(block[i])
//     }
// }



// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// let i = 0
// while (i<block.length) {
//     if (block[i]%2 === 0) {   
//    console.log(block[i])
//     } i++;    
// } 

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i = 0; i < block.length; i++) {
//     if (block[i]%2===0) {
//         console.log(block[i])
//     }
// }
// зворотній
// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i=block.length ; i >=0; i--) {
//     if (block[i]%2===0) {
//        
//     }
// } console.log(block[i])
// 7. замінити кожне число кратне 3 на слово "okten"

// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// console.log(block)
// for (let i = 1; i < block.length; i++) {
//     if(block[i]%3===0){
//         block[i]='okten'
//     }
// }console.log(block)
// зворотній

// let block = [2,17,13,6,22,31,45,61,6,100,-18]
// for (let i = block.length; i>=1 ; i--) {
//     if(block[i]%3===0){
//         block[i]='okten'
//     }
// }console.log(block)
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

  




// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let arr =[];
// for (let i = 0; i < 50; i++) {
//    arr[i] = i*2;
// }console.log(arr)


// - заповнити його 50 непарними числами за допомоги циклу.
// let arr =[];
// for (let i = 0; i < 50; i++) {
//    arr[i] = i*2+1;
// }console.log(arr)

// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.

// 3. используя Math.r  andom заполнить массив из ???(сколько хотите) элементов.
// let arr =[];
// for (let i = 0; i < 10; i++) {
//     arr[i]=Math.random()
    
// }console.log(arr)

//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//  2. вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let arr = [100,250,50,168,120,345,188]
let sum = 0
let check = 0
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i] 
    check = sum/arr.length
}console.log(sum)
console.log(check)


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
// let masuv = ['o', 1, true, 'r', 't', 99, 't', false, 'd', 's'];
// let arr = []
// for (let i = 0; i < masuv.length; i++) {
//     if (typeof masuv[i]==='number') {
//         arr.push(masuv[i]);
//     }
// }console.log(arr)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let str ='';
// let i = 0;
// while (i<abc.length) {
//     str = str + abc[i];
//     i++;
// } console.log(str);
