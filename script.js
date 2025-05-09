// Tic Tac Toe Game
let n = 0;

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let sol1 = [];
let sol2 = [];

function checkwin(arr, sol) {
   
    for (let i = 0; i < arr.length; i++) {
      let pattern = arr[i];   
      if (
        sol.includes(pattern[0]) && 
        sol.includes(pattern[1]) && 
        sol.includes(pattern[2])
      ) {
        return true;  
      }
    }
    return false;
  }

// function checkwin(arr, sol) {
//     if (sol.includes(arr[0][0]) && sol.includes(arr[0][1]) && sol.includes(arr[0][2]) ||
//     sol.includes(arr[0][0]) && sol.includes(arr[0][1]) && sol.includes(arr[0][2]) ||
//     sol.includes(arr[1][0]) && sol.includes(arr[1][1]) && sol.includes(arr[1][2]) ||
//     sol.includes(arr[2][0]) && sol.includes(arr[2][1]) && sol.includes(arr[2][2]) ||
//     sol.includes(arr[3][0]) && sol.includes(arr[3][1]) && sol.includes(arr[3][2]) ||
//     sol.includes(arr[4][0]) && sol.includes(arr[4][1]) && sol.includes(arr[4][2]) ||
//     sol.includes(arr[5][0]) && sol.includes(arr[5][1]) && sol.includes(arr[5][2]) ||
//     sol.includes(arr[6][0]) && sol.includes(arr[6][1]) && sol.includes(arr[6][2]) ||
//     sol.includes(arr[7][0]) && sol.includes(arr[7][1]) && sol.includes(arr[7][2]) ){
//         return true;
//     } else return false}

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    if (n == 0) {
      document.getElementById(i.toString()).innerHTML = "X";
      n = 1;
      sol1.push(i);
    } else {
      document.getElementById(i.toString()).innerHTML = "O";
      n = 0;
      sol2.push(i);
    }

  });
    document.getElementById(i.toString()).addEventListener("click", function () {
        if (checkwin(arr, sol1)) {
        alert("X wins");
        location.reload();
        } else if (checkwin(arr, sol2)) {
        alert("O wins");
        location.reload();
        } else if (sol1.length + sol2.length == 9) {
        alert("Draw");
        location.reload();
        }
    });
}
