const readline = require('readline');

function cekAngkaSama(arr) {
  let setAngka = new Set();

  for (let angka of arr) {
    if (setAngka.has(angka)) {
      return true;
    }
    setAngka.add(angka);
  }

  return false;
}

// Fungsi untuk meminta input dari pengguna menggunakan readline
function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Masukkan angka-angka dalam array (pisahkan dengan koma): ", answer => {
      rl.close();
      const arrayInput = answer.split(',').map(Number);
      resolve(arrayInput);
    });
  });
}

// Memanggil fungsi dan menampilkan hasil
async function main() {
  const arrayInput = await getInput();
  const hasilPemeriksaan = cekAngkaSama(arrayInput);
  console.log("Apakah ada angka yang sama dalam array? " + hasilPemeriksaan);
}

// Jalankan program utama
main();
