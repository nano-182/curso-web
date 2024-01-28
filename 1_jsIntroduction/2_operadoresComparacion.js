/**
 * Operador de comparación
 *
 * > mayor que
 * >= mayor igual
 * < menor que
 * === igual que
 * !=== diferente que
 *
 */

console.log('/** *********** Igual que **************** */')
const birdHasWings = false;

console.log(`birdHasWings: ${birdHasWings}`)
if (birdHasWings === true) {
  console.log('It is True');
} else {
  console.log('It is False');
}
console.log('')


console.log('/** *********** Mayor que **************** */')
const number = 30

console.log(`number: ${number}`);
if (number > 18) {
  console.log('Si');
} else {
  console.log('No')
}
console.log('')


console.log('/** *********** Menor que **************** */');
const number2 = 30
console.log(`number2: ${number2}`);
if (number2 < 18) {
  console.log('Si');
} else {
  console.log('No')
}
console.log('')

console.log('/** *********** Mayor igual que **************** */')
const mayorDeEdad = 18
console.log(`mayorDeEdad: ${mayorDeEdad}`)
if (mayorDeEdad >= 18) {
  console.log('Si');
} else {
  console.log('No')
}
console.log('')

console.log('/** *********** menor igual que **************** */')
const now = new Date("2024-01-27T00:00:00-06:00").getTime();
const expiredDay = new Date("2024-01-28T00:00:00-06:00").getTime();
console.log(`now: ${now}`);
console.log(`expiredDay: ${expiredDay}`);

if (now <= expiredDay) {
  console.log('Expirado');
} else {
  console.log('No expirado');
}

console.log('/** *********** Diferente que **************** */')
const childrenOpenTap = false;
console.log(`childrenOpenTap: ${childrenOpenTap}`);

if (childrenOpenTap !== false) {
  console.log('Irene se enoja');
} else {
  console.log('Irene es feliz');
}


