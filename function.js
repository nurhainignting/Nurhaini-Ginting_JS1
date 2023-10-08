function tambah(angka1, angka2) {
    return angka1 + angka2;
  }
  
  // Memanggil fungsi tambah dan menampilkan hasil
  var hasilPenambahan = tambah(5, 3);
  console.log("Hasil penambahan: " + hasilPenambahan); // Output: "Hasil penambahan: 8"
  
  // Fungsi untuk menghitung faktorial
  function faktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktorial(n - 1);
    }
  }
  
  // Memanggil fungsi faktorial dan menampilkan hasil
  var hasilFaktorial = faktorial(5);
  console.log("5 faktorial adalah: " + hasilFaktorial); // Output: "5 faktorial adalah: 120"