function diagonalAttack(arr) {

    let matrix = [];

    for (let i = 0; i < arr.length; i++) {

        let currArr = arr[i].split(' ').map(Number);

        matrix.push(currArr);

    }

    let sum = SumDiagonals(matrix);
   
   
    let isEqual = sum === 0 ? false : true;

    if (isEqual) {

        let counter = matrix.length - 1;
        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if (col != row && col != counter) {

                    matrix[row][col] =sum;
                }

                
            }

            counter--;
        }
    }

printMatrix(matrix);


function printMatrix(matrix){


    for (let row = 0; row < matrix.length; row++) {

        console.log(matrix[row].join(" "));

    }

}


    function SumDiagonals(matrix) {

        let diagonalSumOne = 0;
        let diagonalSumTwo = 0;

        let counter = matrix.length - 1;

        for (let i = 0; i < matrix.length; i++) {

            diagonalSumOne += matrix[i][i]
            diagonalSumTwo += matrix[i][counter];

            counter--;
        }

        if (diagonalSumOne == diagonalSumTwo) {
            return diagonalSumTwo;
        }
        return 0;
    }


}
// diagonalAttack(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']);