// get the values from the page
// starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.querySelector('#startValue').value;
    let endValue = document.querySelector('#endValue').value;

    // validate our inputs
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert('You must enter integers');
    }
}

// generate numbers from startValue and endValue
// logic functions(s)
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // get all numbers from start to end
    for (let i = startValue; i <= endValue; i++) {
        // execute in a loop until index = end value
        numbers.push(i);
    }

    return numbers;
}

// display the numbers and mark even numbes bold
// display or view functions
function displayNumbers(numbers) {
    let templateRows = '';

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let className = 'even';

        if (number % 2 === 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById('results').innerHTML = templateRows;
}
