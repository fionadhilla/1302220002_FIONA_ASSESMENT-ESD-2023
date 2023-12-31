function cekPalindrom(kata) {
    // Menghapus spasi dan mengubah menjadi huruf kecil
    const cleanedKata = kata.toLowerCase().replace(/\s/g, '');
  
    // Mengecek palindrom
    const reversedKata = cleanedKata.split('').reverse().join('');
    if (cleanedKata === reversedKata) {
      // Jika palindrom dan sama persis
      return "eureka!!";
    } else if (cleanedKata === reversedKata.split('').reverse().join('').toUpperCase()) {
      // Jika palindrom tapi berbeda kapital
      return "?";
    } else {
      return "suka blyat";
    }
  }
  
  // Contoh penggunaan fungsi
  console.log("KataK:", cekPalindrom("KataK"));
  console.log("Angsa", cekPalindrom("Angsa")); 
  console.log("Ibu Ratna antar ubi", cekPalindrom("Ibu Ratna antar ubi")); 
  