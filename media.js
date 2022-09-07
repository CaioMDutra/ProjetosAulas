const notas = [10, 4, 9, 3.5]

const media = notas.reduce((a,b) =>
a+b,0) /notas.length

console.log(`A sua media foi de ${media}`)