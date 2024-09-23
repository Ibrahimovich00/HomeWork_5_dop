//#1
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

console.log(doubleArray([1, 2, 3]));

console.log(doubleArray([4, 1, 1, 1, 4]));

console.log(doubleArray([2, 2, 2, 2, 2, 2]));


//#2
function invertArray(arr) {
    return arr.map(num => num === 0 ? 0 : -num);
}

console.log(invertArray([1, 2, 3, 4, 5]));

console.log(invertArray([1, -2, 3, -4, 5]));

console.log(invertArray([]));

console.log(invertArray([0]));


//#3
function replaceStrings(arr) {
    return arr.map(item => typeof item === 'string' ? null : item);
}

console.log(replaceStrings([4, 6, 'Ivan', 5, 'Denis ']));


//#4
function filterNames(arr) {
    return arr.filter(name => name.trim().length <= 5);
}

console.log(filterNames(['Евдоким', 'Ivan', 'Игнат', 'Denis '])); 


//#5
function cubeArray(arr) {
    return arr.map(num => Math.pow(num, 3));
}

console.log(cubeArray([7, 8, 2])); 


//#6
function wordLengths(arr) {
	return arr.map(word => word.length)
}

console.log(wordLengths(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));


//#7
function displayNumbers(arr) {
	arr.forEach(num => {
		const p = document.createElement('p');
		p.innerHTML = `Цифры: ${num}`;
		document.body.appendChild(p);
	})
}

displayNumbers([1, 2, 3, 4, 5]);


//#8
function getPizzas(arr) {
    return arr.map(friend => friend.pizzas);
}

const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];

console.log(getPizzas(friends)); 
