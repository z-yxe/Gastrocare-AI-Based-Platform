// Array untuk menyimpan data pengguna
let users = [
    {
        name: "User",
        email: "user@gmail.com",
        password: "user1234"
    },
];

// Elemen DOM
const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
const popup = document.getElementById('customPopup');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');
const popupClose = document.getElementById('popupClose');

// Fungsi untuk menampilkan popup
function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
    popup.style.display = 'none';
}

// Tutup popup saat tombol close diklik
popupClose.addEventListener('click', hidePopup);

// Tutup popup saat klik di luar konten
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        hidePopup();
    }
});

// Toggle panel saat overlay button diklik
overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');
});

// Fungsi untuk menangani login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        showPopup("Peringatan", "Email dan password harus diisi!");
        return;
    }

    if (password.length < 8) {
        showPopup("Peringatan", "Password harus minimal 8 karakter!");
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Simpan nama pengguna ke sessionStorage
        sessionStorage.setItem('loggedInUser', user.name);
        setTimeout(() => {
            window.location.href = "/main.html"; // Kembali ke halaman utama
        }, 1500);
    } else {
        showPopup("Gagal", "Email atau password salah, atau user belum terdaftar!");
    }
});

// Fungsi untuk menangani registrasi
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (name === "" || email === "" || password === "") {
        showPopup("Peringatan", "Semua field harus diisi!");
        return;
    }

    if (password.length < 8) {
        showPopup("Peringatan", "Password harus minimal 8 karakter!");
        return;
    }

    const emailExists = users.some(u => u.email === email);
    if (emailExists) {
        showPopup("Peringatan", "Email sudah digunakan! Gunakan email lain.");
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });
    
    showPopup("Sukses", "Registrasi berhasil! Silakan login.");

    document.getElementById("registerForm").reset();
    
    setTimeout(() => {
        container.classList.remove('right-panel-active');
        hidePopup();
    }, 1500);
});

// Toggle panel saat tombol overlay-panel diklik
document.querySelectorAll('.overlay-panel button').forEach(button => {
    button.addEventListener('click', () => {
        container.classList.toggle('right-panel-active');
    });
});