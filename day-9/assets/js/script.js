// mendapatkan elemen dengan id
const button = document.getElementById('btn');
// mendapatkan elemen dengan class
const btn = document.querySelector('.btn');

const modal = document.querySelector('.modal')

button.addEventListener('click', () => {
    modal.classList.add('show')
})

// remove
const btnn = document.getElementById('btn-hilang')

btnn.addEventListener('click', () => {
    modal.classList.remove('show')
})


