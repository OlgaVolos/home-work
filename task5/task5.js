// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru


//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// let tittleA = '<a>';
// let describeA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let attributesA = [
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' }

// ]
// let a = new Tag(tittleA, describeA, attributesA);
// console.log(a);

// let tittleDiv = '<div>';
// let describeDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let attributesDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//     {titleOfAttr: 'tittle', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }

// ]
// let div = new Tag(tittleDiv, describeDiv, attributesDiv);
// console.log(div);

// let tittleH1 = '<h1>';
// let describeH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.';
// let attributesH1 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' }
// ]
// let h1 = new Tag(tittleH1, describeH1, attributesH1);
// console.log(h1);

// let tittleSpan = '<span>';
// let describeSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. ';
// let attributesSpan = [
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
//     {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.' }
// ]
// let span = new Tag(tittleSpan, describeSpan, attributesSpan);
// console.log(span);

// let tittleInput = '<input>';
// let describeInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. ';
// let attributesInput = [
//     {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//     {titleOfAttr: 'size', actionOfAttr: 'Ширина текстового поля.' }
// ]
// let input = new Tag(tittleInput, describeInput, attributesInput);
// console.log(input);

// let tittleForm = '<form>';
// let describeForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let attributesForm = [
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//     {titleOfAttr: 'name', actionOfAttr: 'Имя формы.' }
// ]
// let form = new Tag(tittleForm, describeForm, attributesForm);
// console.log(form);

// let tittleOption = '<option>';
// let describeOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let attributesOption = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' }
// ]
// let option = new Tag(tittleOption, describeOption, attributesOption);
// console.log(option);

// let tittleSelect = '<select>';
// let describeSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let attributesSelect = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.' }
// ]
// let select = new Tag(tittleSelect, describeSelect, attributesSelect);
// console.log(select);

// ==============================================


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// class Tag {
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
// }
//     }
//
//     let tittleA = '<a>';
//     let describeA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
//     let attributesA = [
//         {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' }
//
//     ]
//     let a = new Tag(tittleA, describeA, attributesA);
//     console.log(a);
    
//     let tittleDiv = '<div>';
//     let describeDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
//     let attributesDiv = [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
//         {titleOfAttr: 'tittle', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }
    
//     ]
//     let div = new Tag(tittleDiv, describeDiv, attributesDiv);
//     console.log(div);
    
//     let tittleH1 = '<h1>';
//     let describeH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.';
//     let attributesH1 = [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' }
//     ]
//     let h1 = new Tag(tittleH1, describeH1, attributesH1);
//     console.log(h1);
    
//     let tittleSpan = '<span>';
//     let describeSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. ';
//     let attributesSpan = [
//         {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
//         {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.' }
//     ]
//     let span = new Tag(tittleSpan, describeSpan, attributesSpan);
//     console.log(span);
    
//     let tittleInput = '<input>';
//     let describeInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. ';
//     let attributesInput = [
//         {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
//         {titleOfAttr: 'size', actionOfAttr: 'Ширина текстового поля.' }
//     ]
//     let input = new Tag(tittleInput, describeInput, attributesInput);
//     console.log(input);
    
//     let tittleForm = '<form>';
//     let describeForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
//     let attributesForm = [
//         {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.' },
//         {titleOfAttr: 'name', actionOfAttr: 'Имя формы.' }
//     ]
//     let form = new Tag(tittleForm, describeForm, attributesForm);
//     console.log(form);
    
//     let tittleOption = '<option>';
//     let describeOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
//     let attributesOption = [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
//         {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' }
//     ]
//     let option = new Tag(tittleOption, describeOption, attributesOption);
//     console.log(option);
    
//     let tittleSelect = '<select>';
//     let describeSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
//     let attributesSelect = [
//         {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
//         {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.' }
//     ]
//     let select = new Tag(tittleSelect, describeSelect, attributesSelect);
//     console.log(select);
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car  = {
//     manufacturer: 'Hyundai',
//     model: 'Tucson',
//     year: 2020,
//     maxSpeed: 181,
//     engine: 1999,
//     drive: function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину` );
//     },
//     info: function(){
//         console.log(car);
//     },

//     increaseMaxSpeed: function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     },

//     changeYear: function(newValue) {
//         this.year = newValue;
//     },
//     addDriver: function(drivers) {
//         this.shafer = drivers;
//     }
// }
// let driver = {name: 'Max', age: 25};
// car.info();
// car.drive();
// car.increaseMaxSpeed(100);
// car.changeYear(2021);
// car.addDriver(driver);

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (manufacturer, model, year, maxSpeed, engine){
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину` );
//     };
//     this.info = function() {
//         console.log(this.manufacturer, this.model, this.year, this.maxSpeed, this.engine);
//     };
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function(newValue){
//         this.year = newValue;
//     };
//     this.addDriver = function(driver) {
//         this.shafer = driver;
//     }
// };
// let newDriwer = {name: 'Olja', age: 33};
// let auto = new Car ('Hyundai', 'Tucson', 2020, 181, 1999);
// console.log(auto);
// auto.info();
// auto.drive();
// auto.increaseMaxSpeed(100);
// auto.changeYear(2021);
// auto.addDriver(newDriwer);




    


// ==============================================

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor (manufacturer, model, year, maxSpeed, engine){
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive = function (){
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину` );
//         };
//         this.info = function() {
//             console.log(this.manufacturer, this.model, this.year, this.maxSpeed, this.engine);
//         };
//         this.increaseMaxSpeed = function(newSpeed){
//             this.maxSpeed += newSpeed;
//         };
//         this.changeYear = function(newValue){
//             this.year = newValue;
//         };
//         this.addDriver = function(driver) {
//             this.shafer = driver;
//         }
//     }
// }
// let newDriwer = {name: 'Olja', age: 33};
// let auto = new Car ('Hyundai', 'Tucson', 2020, 181, 1999);
// console.log(auto);
// auto.info();
// auto.drive();
// auto.increaseMaxSpeed(100);
// auto.changeYear(2021);
// auto.addDriver(newDriwer);


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella{
//     constructor(name, age, size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let girl1 = new Cinderella ('Olja', 33, 39);
// let girl2 = new Cinderella ('Yulia', 32, 38);
// let girl3 = new Cinderella ('Katja', 31, 37);
// let girl4 = new Cinderella ('Olena', 30, 36);
// let girl5 = new Cinderella ('Ira', 29, 35);
// let girl6 = new Cinderella ('Maria', 28, 34);
// let girl7 = new Cinderella ('Anna', 27, 35);
// let girl8 = new Cinderella ('Ulia', 26, 36);
// let girl9 = new Cinderella ('Svitlana', 25, 37);
// let girl10 = new Cinderella ('Oksana', 24, 38);

// const princess = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];


// class Prince{
//     constructor(name, age, shoes){
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
// };

// let boy = new Prince('Yura', 38, 36);
//
// for (const girl of princess) {
//     if(girl.size === boy.shoes){
//         console.log(`${boy.name} + ${girl.name}`);
//         break;
//     } 
// }





// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//
// function Cinderella(name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// };
//
// let girl1 = new Cinderella ('Olja', 33, 39);
// let girl2 = new Cinderella ('Yulia', 32, 38);
// let girl3 = new Cinderella ('Katja', 31, 37);
// let girl4 = new Cinderella ('Olena', 30, 36);
// let girl5 = new Cinderella ('Ira', 29, 35);
// let girl6 = new Cinderella ('Maria', 28, 34);
// let girl7 = new Cinderella ('Anna', 27, 35);
// let girl8 = new Cinderella ('Ulia', 26, 36);
// let girl9 = new Cinderella ('Svitlana', 25, 37);
// let girl10 = new Cinderella ('Oksana', 24, 38);
//
// const princess = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];
//
//
// function Prince (name, age, tuflja){
//     this.name = name;
//     this.age = age;
//     this.tuflia = tuflja;
//     this.findCinderella = function (girls){
//         for (const girl of girls) {
//             if (girl.size === this.tuflia){
//                 console.log(`${this.name} + ${girl.name}`);
//                 break;
//             }
//         }
//     }
// }
//
// const boy = new Prince("Oleg", 32, 35);
//
// boy.findCinderella(princess);
//
//
//
//
//
//
//
//
//













