/*
 * STUDY CASEs 1
 * Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut::

 * -Algoritma
 * Klasifikasi level untuk karakter dari sebuah game
 *
 * Jika Power lebih dari 100, maka Status disebut "Expert"
 * Jika Power di atas 70 sampai 100, maka Status disebut "Pro"
 * Jika Power di atas 50 sampai 70, maka Status disebut "Normal"
 * Jika Power di atas 30 sampai 50, maka Status disebut "Basic"
 * Jika Power di bawah 30, maka Status disebut "Beginner"
 * 
 * PSEUDOCODE
 * STORE Power WITH ANY NUMBER
 *
 * * power lebih besar dari 100 : "Expert"
 * power di atas 70 - 100 : "Pro"
 * power diatas 50 -70 : "Normal"
 * power diatas 30 -50 : "Basic"
 * power di bawah 30 : "Baginer"
 * END IF
 */

// var Power = 500;
// if (Power > 100) {
//   console.log("Expert Player");
// } else if (Power > 70 && Power <= 100) {
//   console.log("Pro Player");
// } else if (Power > 50 && Power <= 70) {
//   console.log("Normal Player");
// } else if (Power > 30 && Power <= 50) {
//   console.log("Basic Player");
// } else if (Power > 30) {
//   console.log("Beginner Player");
// }


/*
 * STUDY CASEs 2
 * Sebuah vending machine dapat menginput sebuah string dan memberikan sebuah minuman, berikut list nya:

 * -Algoritma
 *  Vending maching memberikan minuman input string
 * 
 * Jika minuman kosong, maka tampilkan "Input minuman"
 * Jika minuman diinput "Sweet Tea" , maka tampilkan "You choose Sweet Tea, thanks"
 * Jika minuman diinput "Plain Tea" , maka tampilkan "You choose Plain Tea, thanks"
 * Jika minuman diinput "Boba" , maka tampilkan "You choose Boba, thanks"
 * Jika minuman diinput "Milk Coffee" , maka tampilkan "You choose Milk Coffee, thanks"
 * Jika minuman diinput "Choco Ice" , maka tampilkan "You choose Choco Ice, thanks"
 * Jika minuman diinput salah, tampilkan "minuman is not defined"
 * 
 * PSEUDOCODE
 * STORE minuman WITH ANY STRING
 * 
 * IF minuman EQUAL "Sweet Tea" THEN
 *      DISPLAY "You choose Sweet Tea, thanks"
 * ELSE IF minuman EQUAL "Plain Tea" THEN
 *      DISPLAY "You choose Plain Tea, thanks"
 * ELSE IF minuman EQUAL "Boba" THEN
 *      DISPLAY "You choose Boba, thanks"
 *  ELSE IF minuman EQUAL "Milk Coffee" THEN
 *      DISPLAY "You choose Milk Coffee, thanks"
 * ELSE IF minuman EQUAL "Choco Ice" THEN
 *      DISPLAY "You choose Choco Ice, thanks"
 * ELSE IF minuman EQUAL ""
 *  DISPLAY "Input minuman"
 * ELSE 
 *  DISPLAY "minuman is not defined"
 * END IF
 */


// CODING

// var minuman = 'Choco Ice';

// switch (minuman) {
//   case 'Sweet Tea':
//     console.log('You choose Sweet Tea, thanks');
//     break;
//   case 'Plain Tea':
//     console.log('You choose Plain Tea, thanks');
//     break;
//   case 'Boba':
//     console.log('You choose Boba, thanks');
//     break;
//   case 'Milk Coffee':
//     console.log('You choose Milk Coffee, thanks');
//     break;
//   case 'Choco Ice':
//     console.log('You choose Choco Ice, thanks');
//     break;
//   default:
//     if (minuman === '') {
//       console.log('Input minuman');
//     } else {
//       console.log('minuman is undefined');
//     }
//     break;
// }

// Task 3
/**
 * Algoritma
 * 
 * Pilihan Coupon Code untuk Cash back e-commerce
 * 
 * a. FreeOngkir
 * Jika pembelian lebih dari atau sama dengan 50.000, ada potongan 10%
 * Jika pembelian antara 30.000 dan 50.000, ada potongan 5%
 * Jika pembelian kurang dari 30.000, ada potongan 2.5%
 * 
 * b. Free15%
 * Jika pembelian lebih dari atau sama dengan 30.000, ada potongan 15%
 * Jika pembelian kurang dari 30.000, ada potonga 0%
 * 
 * 
 // PSEUDOCODE
 /**
  * 
 * STORE pembelian WITH ANY NUMBER
 * STORE coupon WITH ANY STRING
 * STORE total WITH ANY NUMBER
 * 
 * IF coupon EQUAL "FreeOngkir" THEN
 *  IF pembelian GREATER THAN OR EQUAL 50.000 THEN
 *      total EQUAL TO pembelian MULTIPLY 0.9 
 *      DISPLAY "Total Pembelian anda Rp" total
 *  ELSE IF pembelian GREATER THAN OR EQUAL 30.000 AND LESS THAN 50.000 THEN
 *      total EQUAL TO pembelian MULTIPLY 0.95 
 *      DISPLAY "Total Pembelian anda Rp" total
 *  ELSE 
 *      total EQUAL TO pembelian MULTIPLY 0.975
 *      DISPLAY "Total Pembelian anda Rp" total
 *  END IF
 * IF coupon EQUAL "Free15%" THEN
 *  IF pembelian GREATER THAN OR EQUAL 30.000 THEN
 *      total EQUAL TO pembelian MULTIPLY 0.85 
 *      DISPLAY "Total Pembelian anda Rp" total
 *  ELSE IF pembelian LESS THAN 30.000 THEN
 *      total EQUAL TO pembelian MULTIPLY 1 
 *      DISPLAY "Total Pembelian anda Rp" total
 * ELSE IF access EQUAL ""
 *  DISPLAY "Pilih coupon"
 * ELSE 
 *  DISPLAY "Coupon is not defined"
 * END IF
 */

// CODING

var pembelian = 30000;
var coupon = 'Free15%';

switch (coupon) {
  case 'FreeOngkir':
    if (pembelian >= 50000) {
      var total = pembelian * 0.9;
      console.log('Total pembelian anda Rp ' + total);
    } else if (pembelian >= 30000 && pembelian < 50000) {
      var total = pembelian * 0.95;
      console.log('Total pembelian anda Rp ' + total);
    } else {
      var total = pembelian * 0.975;
      console.log('Total pembelian anda Rp ' + total);
    }
    break;
  case 'Free15%':
    if (pembelian >= 30000) {
      var total = pembelian * 0.85;
      console.log('Total pembelian anda Rp ' + total);
    } else {
      var total = pembelian * 1;
      console.log('Total pembelian anda Rp ' + total);
    }
    break;
  default:
    if (coupon === '') {
      console.log('Pilih Coupon.');
    } else {
      console.log('Coupon is not defined.');
    }
}