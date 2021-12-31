/*
Celsius em fahrenheit

Crie uma função que receba em string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

let grau = '40F'

function transformar_graus() {
  if (grau.toUpperCase().includes('C')) {
    const grau_number = grau.slice(0, -1)

    let F = (grau_number * 9) / 5 + 32

    console.log(`A temperatura e de ${F}F`)
  } else if (grau.toUpperCase().includes('F')) {
    const grau_number = grau.slice(0, -1)

    let C = ((grau_number - 32) * 5) / 9
    console.log(`A temperatura e de ${C.toFixed(2)}C`)
  } else {
    const grau_number = grau.slice(2, 3)
    throw new Error(`O grau: (${grau_number}) não foi identificado`)
  }

  return transformar_graus
}

transformar_graus()
