const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const dataArray = Object.values(data);
const total = dataArray.reduce((acc, value) => acc + value, 0);

const response = Object.entries(data).map(([state, value]) => ({
    state,
    percentual: ((value / total) * 100).toFixed(2) + "%"
}));

console.info(response);
