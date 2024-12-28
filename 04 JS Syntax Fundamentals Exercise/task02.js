function solve(peopleCount, typeOfGroup, dayOfWeek) {
    let totalPrice;

    if (typeOfGroup === 'Students' && dayOfWeek === 'Friday') {
        totalPrice = peopleCount * 8.45;
    }
    else if (typeOfGroup === 'Students' && dayOfWeek === 'Saturday') {
        totalPrice = peopleCount * 9.80;
    }
    else if (typeOfGroup === 'Students' && dayOfWeek === 'Sunday') {
        totalPrice = peopleCount * 10.46;
    }

    if (typeOfGroup === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    }

    if (typeOfGroup === 'Business' && dayOfWeek === 'Friday') {
        totalPrice = peopleCount * 10.90;
    }
    else if (typeOfGroup === 'Business' && dayOfWeek === 'Saturday') {
        totalPrice = peopleCount * 15.60;
    }
    else if (typeOfGroup === 'Business' && dayOfWeek === 'Sunday') {
        totalPrice = peopleCount * 16.00;
    }

    if (typeOfGroup === 'Business' && peopleCount >= 100) {
        let pricePerPerson = totalPrice / peopleCount;
        totalPrice -= pricePerPerson * 10;
    }

    if (typeOfGroup === 'Regular' && dayOfWeek === 'Friday') {
        totalPrice = peopleCount * 15.00;
    }
    else if (typeOfGroup === 'Regular' && dayOfWeek === 'Saturday') {
        totalPrice = peopleCount * 20.00;
    }
    else if (typeOfGroup === 'Regular' && dayOfWeek === 'Sunday') {
        totalPrice = peopleCount * 22.50;
    }

    if (typeOfGroup === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
