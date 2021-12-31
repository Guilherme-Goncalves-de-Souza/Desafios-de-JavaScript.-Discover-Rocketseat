/*
Transformar notas escolares.

maior que 90 ->  A
entre 80 a 89 -> B
entre 70 a 79 -> C
entre 60 a 69 -> D
menor que 60 ->  F

*/

let nota = 89

let nota_final

if (nota >= 90) {
  nota_final = 'A'
} else if (nota >= 80 && nota <= 89) {
  nota_final = 'B'
} else if (nota >= 70 && nota <= 79) {
  nota_final = 'C'
} else if (nota >= 60 && nota <= 69) {
  nota_final = 'D'
} else if (nota <= 60) {
  nota_final = 'F'
}

console.log(nota_final)
