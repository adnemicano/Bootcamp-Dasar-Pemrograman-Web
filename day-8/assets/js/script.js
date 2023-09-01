var nama = "aliL cakep bgt";
let usia = 16; // variable dapat berubah
const PI = 3.14; // variable tidak dapat berubah/tetap 


// console.log berfungsi menampilkan sesuatu pada log web
console.log("Nama : " + nama)
console.log("Usia : " + usia)

// tipe data string
let namaLengkap = "Ananda Aqilla";
let greetings = 'Haloo orang cakep a.k.a ✌️ ';

console.log(greetings + namaLengkap)

// tipe data integer
let nilai = 100;
let nilai2 = 90;

console.log("Nilai PPB : " + nilai, "Nilai PBT : " + nilai2)

// tipe data boolean
let benar = true;
let salah = false;

let tidakAdaNilai = null;

// tipe data object digunakan untuk menyimpan banyak variabel dalam satu variable
let aliL = {
    hobi : "tidur",
    usia : 16,
    pekerjaan : "pelajar",
    status : "jombs"
}

const list = document.getElementById('list');

for (const key in aliL) {
    if (aliL.hasOwnProperty(key)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${aliL[key]}`;
        list.appendChild(listItem);
    }
}

console.log(aliL)

// tipe data array
// array dimulai dari angka 0
let pacarku = ["jaemin", "hendery", "mark"]

console.log(pacarku);
// cara akses array
console.log(pacarku[0]);

// membuat fungsi
function sapa() {
    console.log("Halo!")
}

// memanggil fungsi
sapa();

// fungsi dengan parameter
function play(judul) {
    console.log("Anda memutar film" + judul)
}

// memanggil parameter
play("Spongebob");

// fungsi dengan return
function tambah(number1, number2) {
    console.log(number1 + number2)
}

// memanggil fungsi dengan return
tambah(10, 20);

function kurang(nomer1, nomer2) {
    console.log(nomer1 - nomer2)
}

kurang(100, 25);


let jumlahabsen = 3;
// pengkondisian if dalam javascript
if (jumlahabsen >= 5) {

    // jika kondisi terpenuhi
    console.log("Anda rajin")
} else {

    // jika kondisi tidak terpenuhi
    console.log("Anda dipecat")
}


let nilaiKau = 50;
if (nilaiKau >= 75) {
    console.log("Kmoe sy kasih coklat")
} else {
    console.log("Kmoe kleuar dr kelas")
}

let nilaialiL = 90;
if (nilaialiL >= 80) {
    console.log("A")
} else if  (nilaialiL >= 70) {
    console.log("B")
} else if (nilaialiL >= 60) {
    console.log("C")
} else {
    console.log("aliL butuh bimbingan")
}



let hari = "Senin"

switch(hari) {
    case "Senin":
        console.log("Hari Senin")
        break;
    case "Selasa":
        console.log("Hari Selasa")
        break;
    case "Rabu":
        console.log("Hari Rabu")
        break;
    default:
        console.log("Hari tidak ditemukan")
}


let waktu = new Date().getHours();
// 6 pagi 12 siang 18 malam

console.log(waktu)
    
if (waktu >= 6 && waktu < 12) {
    console.log("Selamat pagi dunia tipu-tipu")
} else if (waktu >= 12 && waktu < 18) {
    console.log("Met siang jamet")
} else if (waktu >= 18 && waktu < 24) {
    console.log("Dah malam jamet")
} else {
    console.log("Jam berapa ni bang")
}