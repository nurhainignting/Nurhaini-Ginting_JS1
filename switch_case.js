// Contoh program JavaScript dengan pernyataan switch case

// Mendefinisikan variabel untuk hari dalam seminggu (1 hingga 7)
var hari = 3;
var namaHari;

// Menggunakan switch case untuk menentukan nama hari berdasarkan nilai variabel "hari"
switch (hari) {
  case 1:
    namaHari = "Minggu";
    break;
  case 2:
    namaHari = "Senin";
    break;
  case 3:
    namaHari = "Selasa";
    break;
  case 4:
    namaHari = "Rabu";
    break;
  case 5:
    namaHari = "Kamis";
    break;
  case 6:
    namaHari = "Jumat";
    break;
  case 7:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

// Menampilkan hasil
console.log("Hari ini adalah " + namaHari);