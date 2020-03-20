// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains




class Chessboard {
    constructor() {


    }
    powerOf(number) {
        return 2 ** (number - 1);
    }
    loopFunction() {
        for (let i = 1; i <= 64; i += 1) {

        }
       
    }
    totalNumberOfGrains() {
        return Math.pow(2, 64) - 1
    }
}


const chessboard = new Chessboard();
console.log(chessboard.powerOf(5))
console.log(chessboard.totalNumberOfGrains())

const powerOf = (number) => {
    return 2 ** (number - 1)
}

const loopFunction = () => {
    for (let i = 1; i <= 64; i += 1) {
        // console.log(powerOf(i));
        // console.log(powerOf(6))


    }
}

loopFunction()

// const test = () => {
//     return Math.pow(2,64) -1
// }

// console.log(test)



// 1 = 1   2^0 =1 
// 2= 2    2^1 = 2
// 3 = 4    2^2 = 4
// 4 = 8   2^3 = 8
// 5 = 16  2^4 =16



