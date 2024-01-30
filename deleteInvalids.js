
function deleteInvalids(array) {

    if (Array.isArray(array) === true) {
        let onlyNumber = [];
        for (let i = 0; i <= array.length; i++) {
            let type = typeof (array[i])
            if (type === 'number') {
                onlyNumber.push(array[i]);
            }
        }
        
        return onlyNumber;
    }
    else{

        return 'invalid';
    }
}


let studentn = [1, '8526', 2, 4, 8,'NaN', 'kug', '20', -3, 5];
// let studentn = 154554;
let result = deleteInvalids(studentn);
console.log(result)