function solve(start, end) {
    const outputArr = [];
    let sum = 0;

    for(let i = start; i <= end; i++) {
        outputArr.push(i);
        sum += i;
    }

    console.log(outputArr.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(0, 26)