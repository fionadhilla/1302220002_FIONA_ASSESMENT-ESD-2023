// Fungsi untuk menentukan siapa yang paling mungkin mengambil kue
function cariPencuri(urutanKedatangan, fotoXiao) {
    // Cek apakah kue masih utuh di meja
    if (fotoXiao.includes("kue")) {
      return "Tidak ada yang mengambil kue, Xiao hanya memotretnya.";
    }
  
    // Jika kue sudah diambil, cari tahu siapa yang paling mungkin mengambilnya
    for (let i = 0; i < urutanKedatangan.length; i++) {
      if (!fotoXiao.includes(urutanKedatangan[i])) {
        return `${urutanKedatangan[i]} mungkin yang mengambil kue.`;
      }
    }
  
    // Jika tidak ada yang cocok, kembalikan pesan default
    return "Tidak dapat menentukan siapa yang mengambil kue.";
  }
  
  // Data input
  const urutanKedatangan = ["Ningguang", "Hutao", "Xiao", "Childe"];
  const fotoXiao = "Foto ruang jamu dengan kue.";
  
  // Panggil fungsi untuk menentukan siapa yang paling mungkin mengambil kue
  const hasilPencarian = cariPencuri(urutanKedatangan, fotoXiao);
  
  // Tampilkan hasil
  console.log(hasilPencarian);
  