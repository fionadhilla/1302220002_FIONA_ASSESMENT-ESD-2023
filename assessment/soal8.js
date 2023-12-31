const produk = [
    { nama: "TV", kategori: "elektronik", harga: 1000 },
    { nama: "headphone", kategori: "elektronik", harga: 200 },
    { nama: "baju", kategori: "fashion", harga: 50 },
    { nama: "gitar", kategori: "musik", harga: 300 },
    { nama: "sepatu", kategori: "olahraga", harga: 80 },
    { nama: "kamera", kategori: "elektronik", harga: 600 }
  ];
  
  const pelanggan = [
    { nama: "Rina", minat: ["elektronik", "musik"], beli: ["TV", "headphone"] },
    { nama: "Budi", minat: ["fashion", "musik"], beli: ["baju", "gitar"] },
    { nama: "Hartono", minat: ["olahraga", "elektronik"], beli: ["sepatu", "kamera"] }
  ];
  
  function rekomendasiProduk(namaPelanggan) {
    const minatPelanggan = pelanggan.find(p => p.nama === namaPelanggan)?.minat || [];
    const produkRekomendasi = [];
  
    produk.forEach(item => {
      if (minatPelanggan.includes(item.kategori) && !pelanggan.find(p => p.nama === namaPelanggan)?.beli.includes(item.nama)) {
        produkRekomendasi.push(item.nama);
      }
    });
  
    return produkRekomendasi;
  }
  
  // Contoh penggunaan fungsi
  const namaPelanggan = "Hartono";
  const rekomendasi = rekomendasiProduk(namaPelanggan);
  
  console.log(`Rekomendasi produk untuk ${namaPelanggan}: ${JSON.stringify(rekomendasi)}`);
  