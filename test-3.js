// Leitura do arquivo JSON
const fs = require('fs');
const json = JSON.parse(fs.readFileSync('./faturamento.json'));

const data = json.filter(item => item.valor > 0);

const lowest = Math.min(...data.map(item => item.valor));
const highest = Math.max(...data.map(item => item.valor));

const total = data.reduce((acc, item) => acc + item.valor, 0);
const average = total / data.length;

const daysAboveAverage = data.filter(item => item.valor > average).length;

const response = {
    diaComMenorFaturamento: lowest,
    diaComMaiorFaturamento: highest,
    diasComFaturamentoAcimaDaMedia: daysAboveAverage
};

console.info(response);
