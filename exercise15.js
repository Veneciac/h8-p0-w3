
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting


//UNTA G BISA MUNCUL
// function groupAnimals(animals) {
//   var urut = animals.sort()
//   var result = []
//   for (var i = 0 ; i <urut.length-1 ; i ++){
//     var hurufawal = urut[i][0]
//     var grup = [urut[i]]
//     for (var j = urut.length-1 ; j > i ; j --){
//       if ( hurufawal === urut[j][0]){
//         grup.push(urut[j])
//         urut.splice(j,1)
//       }
//     }
//     result.push(grup)
//   }
//   return result
// }

function groupAnimals(animals) {
  // you can only write your code here!
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var tampungarr = []
  for(var i = 0; i < alfabet.length; i++){
      var newarr= []
      for(var j = 0; j < animals.length; j++){
          if (animals[j][0] === alfabet[i]){
              newarr.push(animals[j])
          }
      }
      if (newarr.length !== 0){
          tampungarr.push(newarr)
      }
  }
  return tampungarr
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


