/* 

Crie um objeto que possuirá 2 propriedades, ambos do tipo array.

Receitas: []
Despesas: []


Crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

let saldo = {
  receitas: [5000, 1000, 200],
  despesas: [1000, 650, 500, 50]
}

let saldo_receitas
let saldo_despesas
let total

function calculo() {
  saldo_receitas = saldo.receitas[0] + saldo.receitas[1] + saldo.receitas[2]

  saldo_despesas =
    saldo.despesas[0] +
    saldo.despesas[1] +
    saldo.despesas[2] +
    saldo.despesas[3]

  total = saldo_receitas - saldo_despesas

  return calculo
}

calculo()

if (total >= 0) {
  console.log(`O saldo esta positivo: R$ ${total.toFixed(2)}`)
} else if (total < 0) {
  console.log(`O saldo esta negativo: R$ ${total.toFixed(2)}`)
}
