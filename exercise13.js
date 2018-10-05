
//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  var o = 0;
  var x = [];
  //Cari x sama o nya
  for (var i = 0 ; i < arr.length ; i++){
    if (arr[i]==='o'){
      o += i
    }else if (arr[i]==='x'){
      x.push(i)
    }
  }
  var awal = x[0]- o
  var akhir = x[x.length-1]- o
 if ( o > x[x.length-1]){
   var kurango = o - x[x.length-1]
   return kurango
 }else {
    if (awal < akhir){
    return awal
  }else if (awal > akhir){
    return akhir
  }else {
    return 0
  }
 }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

