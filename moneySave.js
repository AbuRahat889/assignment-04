

function monthlySavings(array, cost) {

    let costType = typeof (cost);
    if (Array.isArray(array) === false && costType !== 'number') {

        return 'Invalid';
    }
    else {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 3000) {
                let tax = array[i] * 20 / 100;
                sum = sum + tax;
            }

        }

        let totalCost = sum + cost;

        let totalIncome = 0;
        for (let i = 0; i < array.length; i++) {
            totalIncome = totalIncome + array[i];
        }

        let savings = totalIncome - totalCost;

        if (savings >= 0) {
            return savings;
        }
        else {
            return 'Earn More';
        }

    }
}

let result = monthlySavings([900, 2700, 3400], 10000);
console.log(result);