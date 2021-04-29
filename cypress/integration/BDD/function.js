

function evenOrOdd (number) {


    if (number % 2 === 0) {
        console.log(`Number ${number}, is even` )
    } else (
        console.log(`Number ${number}, is odd`)
    ) 
 
}

evenOrOdd(10)


function dayOfTheWeek(number) {

    day = ''

    switch (number) {
        case 0:
            day = `Sunday`
            break;

        case 1:
            day = `Monday`
            break;

        case 2:
            day = `Tuesday`
            break;

        case 3:
            day = `Wednesday`
            break;

        case 4:
            day = `Thursday`
            break;
        
        case 5:
            day = `Friday`
            break;
        
        case 6:
            day = `Saturday`
            break;
    
        default:
        console.log(`Error: Please enter number between 0 and 6`);
    }

    console.log(`Today is ${day}`);
 
}

dayOfTheWeek(1)