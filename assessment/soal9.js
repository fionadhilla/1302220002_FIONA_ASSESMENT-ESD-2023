function analisisAnak(namaAnak) {
    const dataAnak = {};
  
    namaAnak.forEach(nama => {
      if (dataAnak[nama]) {
        dataAnak[nama]++;
      } else {
        dataAnak[nama] = 1;
      }
    });
  
    const sortedAnak = Object.keys(dataAnak).sort((a, b) => dataAnak[b] - dataAnak[a]);
  
    if (dataAnak[sortedAnak[0]] > 1) {
      const anakNakal = sortedAnak.filter(anak => dataAnak[anak] === dataAnak[sortedAnak[0]]).join(' dan ');
      console.log(`${anakNakal} Nakal`);
    } else {
      console.log("Semuanya anak baik");
    }
  }
  
  // Contoh penggunaan fungsi
  const namaAnak1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
  const namaAnak2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
  const namaAnak3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];
  
  analisisAnak(namaAnak1);
  analisisAnak(namaAnak2);
  analisisAnak(namaAnak3);
  