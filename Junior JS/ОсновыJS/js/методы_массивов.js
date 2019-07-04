//смотреть консоль в браузере

//push - добавляет елементы в конец массива
let NumMass = [3,5];
NumMass.push(78, 45, 64);
console.log(NumMass);

//pop - удаляет последний елемент массива
let DeletArr = [1,3,5,7,9];
DeletArr.pop();
DeletArr.pop();
console.log(DeletArr);

//shift - удаляет елемент в начале массива
ShiftArr = [12,24,48,96,192];
ShiftArr.shift();
ShiftArr.shift();
console.log(ShiftArr);

//unshift - добавляет елемент в начале массива
unshiftArr = [1,9,18,98,16];
unshiftArr.unshift(0, -1);
console.log(unshiftArr);

//split - превращает строку в массив
let str = 'Игорь, Леша, Женя, Таня, Оля, Кирил';
let names = str.split(',');//trim
console.log(names);

//join - объеденяет массив в строку
joinArr = [12, 34, 78, 001, 1213];
console.log(joinArr.join('-'));

//slice - обрезает массив
let SliceArr = ['A', 'B', 'C', 'D'];
console.log(SliceArr.slice(0,2));//вернет массив с индексом от 0 до 1;

//деструктуризация массива - способ разобрать массив по переменным
mainArr = [2, 7, 13, 45, 1213, 89];
let [a, b, c, d, e, f] = mainArr;
console.log(a, b, c, d, e, f);

//sort - сортирует массив

//с числами
 SortArr = [1,4,3,7,6];
 SortArr.sort((a, b) => {
    return a - b;
 });
 console.log(SortArr);
 
 //со строками
 SecondSortArr = ['Aлексей', 'Вова', 'Бикметов', 'Гоша'];
 SecondSortArr.sort();
 console.log(SecondSortArr);

 //reduce - перебирает массив и сохраняет промежуточный результат
let reduceArr = [20,4,5,9];
let reduceResult = reduceArr.reduce((accum, currentValue, index) => {
      console.log('accum = ' + accum); //равен первому елементу массива
      console.log('currentValue = ' + currentValue);//перебирает массив
      console.log('index = ' + index);//узнать номер елемента в массиве
      return accum + currentValue;
});   
console.log(reduceResult);

//reduceRight - перебирает массив с конца
let SecondreduceArr = [20, 4, 5, 9];
let SecondreduceArrResult = SecondreduceArr.reduce((accum, currentValue, index) => {
   console.log('accum = ' + accum); //равен первому елементу массива
   console.log('currentValue = ' + currentValue); //перебирает массив
   console.log('index = ' + index); //узнать номер елемента в массиве
   return accum + currentValue;
});
console.log(SecondreduceArrResult);