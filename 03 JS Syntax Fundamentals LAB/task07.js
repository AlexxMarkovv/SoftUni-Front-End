
function solve(day, age) {

    let price = undefined;

    if (day === 'Weekday') {

        if (age >= 0 && age <= 18) {
            price = '12$';
        }
        else if (age > 18 && age <= 64) {
            price = '18$'; 
        }
        else if (age > 64 && age <= 122) {
            price = '12$';
        }
        else {
            price = 'Error!';
        }


        // switch (age) {
        //     case age:
        //     if(age >= 0 & age <= 18) {
        //         price = '199$'; 
        //     }
        //         break;
        //     case age:
        //         if(age > 18 & age <= 64) {
        //             price = '57$'
        //         }
        //         break;
        //         case age:
        //             if(age > 64 & age <= 122) {
        //                 price = '12$'; 
        //             }
        //         break;
        // }
    }
    else if (day === 'Weekend') {

        if (age >= 0 && age <= 18) {
            price = '15$';
        }
        else if (age > 18 && age <= 64) {
            price = '20$'; 
        }
        else if (age > 64 && age <= 122) {
            price = '15$';
        }
        else {
            price = 'Error!';
        }

        // switch (age) {
        //     case age >= 0 && age <= 18:
        //         price = '15$'; 
        //         break;
        //     case age > 18 && age <= 64:
        //         price = '20$'; 
        //         break;
        //         case age > 64 && age <= 122:
        //         price = '15$'; 
        //         break;
        // }
    }
    else if (day === 'Holiday') {

        if (age >= 0 && age <= 18) {
            price = '5$';
        }
        else if (age > 18 && age <= 64) {
            price = '12$'; 
        }
        else if (age > 64 && age <= 122) {
            price = '10$';
        }
        else {
            price = 'Error!';
        }
    }

    console.log(price);
}

solve('Weekday', 2);
