function argWhere(arr) {
    const input = dim(arr);
    const result = [];
    
    for (let i = 0; i < input[0]; i++) { 
      for (let j = 0; j < input[1]; j++) {
        for (let k = 0; k < input[2]; k++) {
          if (arr[i][j][k] !== 0) {
            result.push([i, j, k]);
          }
        }
      }
    }
    return result; // mengembalikan array 2 dimensi result yang berisi index-index value pada array 3 dimensi yang tidak bernilai 0.
}
  
function dim(arr) { // mendapatkan ukuran dari array yang menjadi input value
if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
} else {
    return [];
}
}
  
const arr = [ // array 3 dimensi
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
];

const result = argWhere(arr);
console.log(result);
