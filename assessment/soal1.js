function analisisReviewAplikasi(reviews) {
    // Memastikan bahwa reviews bukan array kosong
    if (reviews.length === 0) {
      return "Tidak ada review.";
    }
  
    // Menghitung rating terendah, rating tertinggi, dan total rating
    let ratingTerendah = reviews[0];
    let ratingTertinggi = reviews[0];
    let totalRating = reviews[0];
  
    for (let i = 1; i < reviews.length; i++) {
      totalRating += reviews[i];
  
      if (reviews[i] < ratingTerendah) {
        ratingTerendah = reviews[i];
      }
  
      if (reviews[i] > ratingTertinggi) {
        ratingTertinggi = reviews[i];
      }
    }
  
    // Menghitung rata-rata rating
    let rataRataRating = Math.round(totalRating / reviews.length);
  
    // Mengembalikan hasil dalam bentuk objek
    return {
      ratingTerendah: ratingTerendah,
      ratingTertinggi: ratingTertinggi,
      rataRataRating: rataRataRating,
    };
  }
  
  // Contoh penggunaan fungsi
  let reviews = [4, 5, 3, 2, 5, 4, 1];
  let hasilAnalisis = analisisReviewAplikasi(reviews);
  
  console.log("Rating Terendah: " + hasilAnalisis.ratingTerendah);
  console.log("Rating Tertinggi: " + hasilAnalisis.ratingTertinggi);
  console.log("Rata-rata Rating: " + hasilAnalisis.rataRataRating);
  