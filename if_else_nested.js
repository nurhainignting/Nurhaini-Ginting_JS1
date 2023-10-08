
var usia = 20;

// Menggunakan pernyataan if untuk menguji kondisi
if (usia >= 18) {
  console.log("Anda adalah dewasa.");
} else {
  console.log("Anda masih anak-anak.");
  
  // Menggunakan nested if untuk menguji kondisi tambahan
  if (usia >= 13) {
    console.log("Tetapi Anda adalah remaja.");
  } else {
    console.log("Dan Anda adalah anak-anak.");
  }
}