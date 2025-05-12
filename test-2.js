const input = parseInt(process.argv[2]);

if (isNaN(input) || input < 0) {
    console.error('Forneça um número inteiro não negativo.');
    process.exit(1);
}

let a = 0;
let b = 1;

while (b < input) {
    let temp = b;
    b = a + b;
    a = temp;
}

b === input || input === 0
    ? console.info(`O número ${input} pertence à sequência de Fibonacci.`)
    : console.info(`O número ${input} NÃO pertence à sequência de Fibonacci.`);
