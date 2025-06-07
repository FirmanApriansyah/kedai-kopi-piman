// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    } 
});

// Ambil semua link di navbar
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        //Hapus class 'active' agar menu tertutup
        navbar.classList.remove('active');
    });
});


// Kontak Kami Lewat WhatsApp
function kirimKeWhatsApp () {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const noTelp = document.getElementById("no").value;


// Nomer Tujuan 
const nomorTujuan = "62895619952010";

const pesan = `Halo, saya ${nama} Email: ${email} No Telp: ${noTelp}`;

const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;

window.open(url, "_blank");
}