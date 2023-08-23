// menampilkan alert di html
// alert('Hello world');

// prompt('Masukan nama');

// variabel yg dapat diubah
const greetings = "Halo gesss A";

// variabel yg tidak dapat diubah ubah
let greetingss = "Halo pren";

document.getElementById('greetings').innerText = greetings;

// fungsi dari variabel nama akan menyimpan yang kita masukkan di prompt
const nama = prompt('Masukkan nama kamu');

// document berfungsi mengakses semua elemen yang ada pada html
// innerHTML berfungsi untuk mengubah isi dari elemen html
// getElementById berfungsi menyeleksi elemen dengan id nama
document.getElementById('nama').innerHTML = "Halo " + nama;