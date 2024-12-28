function solve(year) {
    let output;

    if (year % 4 == 0 && year % 100 != 0) {
        output = 'yes'
    }
    else if (year % 400 == 0) {
        output = 'yes';
    }
    else {
        output = 'no';
    }

    console.log(output);
}
