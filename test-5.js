let input = process.argv[2]; // Só funciona com uma palavra

if (!input) {
    console.error("Forneça uma palavra como argumento.");
    process.exit(1);
}

let response = "";

for (let i = input.length - 1; i >= 0; i--) {
    response += input[i];
}

console.info(response);
