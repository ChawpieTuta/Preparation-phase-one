/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  if (data.length === 0) {
    return "";
  }

  const digit = data[0];
  const isEven = parseInt(digit) % 2 === 0;

  if ((jenis === "ganjil" && isEven) || (jenis === "genap" && !isEven)) {
    return "x" + changeXRecursive(data.slice(1), jenis);
  } else {
    return digit + changeXRecursive(data.slice(1), jenis);
  }
}
  
  console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
  console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x