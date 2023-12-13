// Iteration 1: Names and Input
const hacker1 = "Guilherme";
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Guilherme";
console.log(`The navigator is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(`Drivers name tem ${hacker2.length} letras`);
} else if (hacker1.length == hacker2.length) {
  console.log(`Navigator tem o mesmo tamanho do Driver`);
} else {
  console.log(`Navigator tem ${hacker1.length} letras.`);
}

// Iteration 3: Loops
/* 3.1 Imprima os caracteres do nome do motorista, separados por espaço, e em letras maiúsculas , ou seja, "J O H N".*/
let novoNome = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    novoNome += `${hacker1[i].toUpperCase()}`;
  } else {
    novoNome += `${hacker1[i].toUpperCase()} `;
  }
}
console.log(novoNome);

//3.2 Imprima todos os caractSeres do nome do navegador na ordem inversa, ou seja, "nhoJ".
let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

//3.3 Dependendo da ordem lexical escreva, driver vem primeiro ou navegador vem primeiro ou OS DOIS TEM O MESMO NOME.
if (hacker1.localeCompare(hacker2)) {
  console.log(`${hacker1} Vem primeiro.`);
} else if (hacker1.localeCompare(hacker1)) {
  console.log(`${hacker2} Vem primeiro.`);
} else {
  console.log(`Nomes iguais`);
}
