const readline = require('readline');

function hitungKembalian(totalPembayaran, totalBelanja) {
  const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
  let kembalian = totalPembayaran - totalBelanja;

  const hasilKembalian = {};

  pecahanUang.forEach(pecahan => {
    const jumlah = Math.floor(kembalian / pecahan);
    if (jumlah > 0) {
      hasilKembalian[pecahan] = jumlah;
      kembalian -= jumlah * pecahan;
    }
  });

  return hasilKembalian;
}

// Fungsi untuk meminta input dari pengguna menggunakan readline
function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Masukkan total pembayaran: ", totalPembayaran => {
      rl.question("Masukkan total belanja: ", totalBelanja => {
        rl.close();
        resolve({ totalPembayaran: parseInt(totalPembayaran), totalBelanja: parseInt(totalBelanja) });
      });
    });
  });
}

// Program utama
async function main() {
  const { totalPembayaran, totalBelanja } = await getInput();
  const kembalian = hitungKembalian(totalPembayaran, totalBelanja);

  console.log("Hasil kembalian:", kembalian);
}

// Jalankan program utama
main();
