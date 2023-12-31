// Definisi menu
const menu = [
    { nama: "Ayam Goreng Krispi", tipe: "Makanan", harga: 15000 },
    { nama: "Ayam Puk Puk (Bukan di Geprek)", tipe: "Makanan", harga: 13000 },
    { nama: "Ayam Bakar", tipe: "Makanan", harga: 20000 },
    { nama: "Es Teh", tipe: "Minuman", harga: 5000 },
    { nama: "Es Jeruk", tipe: "Minuman", harga: 7000 }
  ];
  
  // Fungsi untuk menghitung total biaya dengan pajak
  function hitungBiaya(pesanan) {
    const pajakMakanan = 0.05; // 5%
    const pajakMinuman = 0.03; // 3%
    const pajakTransaksi = 0.15; // 15%
  
    let totalBiaya = 0;
  
    pesanan.forEach(item => {
      const menuTerpilih = menu.find(menuItem => menuItem.nama === item.nama);
      if (menuTerpilih) {
        let pajak = 0;
        if (menuTerpilih.tipe === "Makanan") {
          pajak = pajakMakanan;
        } else if (menuTerpilih.tipe === "Minuman") {
          pajak = pajakMinuman;
        }
  
        const biayaItem = menuTerpilih.harga * (1 + pajak);
        totalBiaya += biayaItem;
      }
    });
  
    // Pajak transaksi
    totalBiaya *= 1 + pajakTransaksi;
  
    return totalBiaya;
  }
  
  // Pesanan masing-masing sahabat
  const pesananRehan = [
    { nama: "Ayam Bakar", jumlah: 2 },
    { nama: "Es Teh", jumlah: 1 }
  ];
  
  const pesananAmba = [
    { nama: "Ayam Puk Puk (Bukan di Geprek)", jumlah: 1 },
    { nama: "Es Teh", jumlah: 3 }
  ];
  
  const pesananFaiz = [
    { nama: "Ayam Goreng Krispi", jumlah: 1 },
    { nama: "Ayam Puk Puk (Bukan di Geprek)", jumlah: 1 },
    { nama: "Ayam Bakar", jumlah: 1 },
    { nama: "Es Teh", jumlah: 1 },
    { nama: "Es Jeruk", jumlah: 1 }
  ];
  
  // Menghitung biaya masing-masing sahabat
  const biayaRehan = hitungBiaya(pesananRehan);
  const biayaAmba = hitungBiaya(pesananAmba);
  const biayaFaiz = hitungBiaya(pesananFaiz);
  
  // Menampilkan hasil
  console.log("Biaya Rehan Whangsap: Rp " + biayaRehan.toFixed(2));
  console.log("Biaya Amba Roni: Rp " + biayaAmba.toFixed(2));
  console.log("Biaya Faiz Ngawi: Rp " + biayaFaiz.toFixed(2));
  