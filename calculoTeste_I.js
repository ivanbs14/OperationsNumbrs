
let numb1 = Number(prompt("digite o primeiro numero:"))
let numb2 = Number(prompt("digite o primeiro segundo:"))

let sum = numb1 + numb2
let multip = numb1 * numb2
let divis = numb1 / numb2
let rest = numb1 % numb2

if(sum % 2 == 0) {
    alert(`A resultado da soma é ${sum} este numero é PAR.`)
} else {
    alert(`A resultado da soma é ${sum} este numero é IMPAR.`)
}

if(numb1 == numb2) {
    alert(`O primeiro numero é igual ao segundo numero`)
} else {
    alert(`O primeiro numero é diferente do segundo numero`)
}