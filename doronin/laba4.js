console.log("Задача 1")
function calculatePrice(price, tax) {
    return price + price * tax;    
}

console.log(calculatePrice(1000, 0.2));
console.log(calculatePrice(1000, 0.2));


const cart = []; // глобальный массив

function addToCart(productName) {
  cart.push(productName);              // побочный эффект №1: мутация внешнего массива
  console.log(`Товар "${productName}" добавлен в корзину`); // побочный эффект №2: вывод в консоль
}

addToCart("Ноутбук");
addToCart("Мышь");
console.log(cart);

console.log("Задача 2")
function factorial(n) {
  // base case: отрицательное число
  if (n < 0) return null;
  // base case: 0! = 1 и 1! = 1
  if (n === 0, n === 1) return 1;
  // рекурсивный шаг
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(-3));



console.log("Задача 3")
const numbers = [5, 12, 8, 130, 44, 3];

const result = numbers
  .filter(n => n > 10)      // оставляем числа > 10: [12, 130, 44]
  .map(n => n * n);         // возводим в квадрат: [144, 16900, 1936]

console.log(result);


console.log("Задача 4")
const orders = [
  { product: "Ноутбук",     price: 50000, quantity: 1 },
  { product: "Мышь",        price: 1500,  quantity: 2 },
  { product: "Клавиатура",  price: 3000,  quantity: 1 }
];

const total = orders.reduce((sum, order) => {
  return sum + order.price * order.quantity;
}, 0); // начальное значение аккумулятора — 0

console.log(total);





console.log("Задача 5")
function multiply(a) {
  const fn = (b) => multiply(a * b);
  fn.valueOf = () => a;      // при арифметике/выводе превращается в число
  return fn;
}

console.log(+multiply(2)(3));       // 6  (valueOf)
console.log(+multiply(2)(3)(4));    // 24
console.log(+multiply(2)(3)(4)(5)); // 120
console.log(+multiply(2)(3) * 2);   // 12 — тоже работает