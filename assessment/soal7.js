function dekripsiChat(chat) {
    const hurufAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const hurufEnkripsi = 'fghijklmnopqrstuvwxyzabcde';
  
    // Fungsi untuk mendekripsi satu huruf
    function dekripsiHuruf(huruf) {
      const index = hurufAlphabet.indexOf(huruf.toLowerCase());
      if (index === -1) {
        return huruf;
      }
      const hurufDekripsi = hurufEnkripsi[index];
      return huruf === huruf.toUpperCase() ? hurufDekripsi.toUpperCase() : hurufDekripsi;
    }
  
    // Fungsi untuk mendekripsi satu kata
    function dekripsiKata(kata) {
      return kata.split('').map(dekripsiHuruf).join('');
    }
  
    // Mendekripsi setiap kata dalam chat
    const chatDekripsi = chat.split(' ').map(dekripsiKata).join(' ');
  
    return chatDekripsi;
  }
  
  // Isi Chat yang dienkripsi
  const isiChatEks = `
  xfqfr bfmdz
  gjxtp lzj rfz ifkyfw jxi snm
  gwt, gjxtp qz rfz rfpfs in bfwlty lfp?
  fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz
  dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu
  `;
  
  // Mendekripsi isi chat
  const isiChatDekripsi = dekripsiChat(isiChatEks);
  
  // Menampilkan hasil
  console.log(isiChatDekripsi);
  