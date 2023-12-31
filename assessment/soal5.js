const readline = require('readline');

function hitungKombinasiUsername(namaLengkap) {
  const namaTanpaSpasi = namaLengkap.replace(/\s/g, '').toLowerCase();
  const maxLength = 6;

  let kombinasiCount = 0;

  for (let i = 1; i <= maxLength; i++) {
    for (let j = 0; j <= namaTanpaSpasi.length - i; j++) {
      kombinasiCount++;
    }
  }

  return kombinasiCount;
}

// Fungsi untuk meminta input dari pengguna menggunakan readline
function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Masukkan nama lengkap Anda: ", answer => {
      rl.close();
      resolve(answer);
    });
  });
}

// Program utama
async function main() {
  const namaLengkap = await getInput();
  const jumlahKombinasi = hitungKombinasiUsername(namaLengkap);

  console.log(`Jumlah kombinasi username yang mungkin: ${jumlahKombinasi}`);
}

// Jalankan program utama
main();
