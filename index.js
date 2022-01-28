const name = prompt('Скажите своё имя')
function helloName(name1){
  const result = alert('Привет ' + name1); 
  return result;
}
helloName(name);

const text = prompt('Введите любой текст')
function isNotEmpty(txt){
if(txt===''){
return alert(false);
}
else{
return alert(true);
}
}
console.log(isNotEmpty(text));

const cena = prompt('Скажите цену продукта за 1 кг')
const ves = prompt('Укажите вес продукта')
function calcFullPrice(cena1,masa) {
  if(typeof cena1==='string'||typeof masa==="string"){
    return null;
  }
  const result = cena1 * masa;
  return result;
}
console.log(calcFullPrice(cena,ves));

const suma = prompt('Скажите сумму заказа')
const money = prompt('Скажите ваше количество денег в кошельке')
function isEnoughMoney(suma1,money1) {
  if(typeof suma1==='string'||typeof money1==="string"){
    return null;
  }
  if (money1 >= suma1) {
    const zdacha = money1 - suma1;
    return true + ' здача:  ' + zdacha;
  }
  else{
    return false + ' Вам не хватает денег';
  }
}
console.log(isEnoughMoney(suma,money));


const floor = Number( prompt('Скажите количество этажей подъезда'));
function etag(floors) {
  const result = floors * 4;
  return result;
}
console.log( etag(floor));


const parametr =  Number(prompt('Введите любое число'));
function diapazon(parametr1) {
  if (parametr1 >= 0 && parametr1 <= 10) {
    return true;
  }
    return false;
}
console.log(diapazon(parametr));

function absolute(num) {
if(num < 0){
  return num * -1;
}
return num;
}
console.log(absolute(10));

function randomNumber(min,max) {
  return Math.random() *(max-min) + min;
}
console.log(Number.parseFloat(randomNumber(0,10)
).toFixed(0));

function sqrtMy(num) {
  return num**(1/2);
}
console.log(sqrtMy(16));

function equation2(a1,b1,c1){

  let aa=b1*b1-4*a1*c1;

  const x1 = (-b1+Math.sqrt(aa))/(2*a1);
  const x2 = (-b1-Math.sqrt(aa))/(2*a1);
  return x1 + ' ' + x2;
}
console.log(equation2(1,5,4));
