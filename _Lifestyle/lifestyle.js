(function() {
const makananData = {
    sayur: [
        { nama: "Sop Ayam + Nasi Putih + Air Hangat", khasiat: "Mengandung protein yang mudah dicerna dan membantu pemulihan lambung.", img: "assets/sayur1.png" },
        { nama: "Sayur Bening + Nasi Jagung + Air Putih", khasiat: "Kaya akan serat larut yang membantu melindungi dinding lambung.", img: "assets/sayur2.png" },
        { nama: "Cah Kembang Kol + Nasi Merah + Jus Wortel", khasiat: "Mengandung antioksidan dan serat yang baik untuk pencernaan.", img: "assets/sayur3.png" },
        { nama: "Tahu Tumis + Nasi Putih + Air Jahe", khasiat: "Sumber protein nabati yang lembut dan membantu meredakan peradangan lambung.", img: "assets/sayur4.png" },
        { nama: "Sup Brokoli + Nasi Putih + Air Kelapa", khasiat: "Kaya akan vitamin C dan antioksidan yang mendukung kesehatan lambung.", img: "assets/sayur5.png" },
        { nama: "Gado-gado + Nasi Merah + Teh Tawar", khasiat: "Sumber serat dan protein yang aman untuk lambung jika tidak pedas.", img: "assets/sayur6.png" },
        { nama: "Cah Kangkung + Nasi Merah + Air Putih", khasiat: "Mengandung zat besi dan serat yang membantu sistem pencernaan.", img: "assets/sayur7.png" },
        { nama: "Sayur Asem + Nasi Putih + Air Hangat", khasiat: "Mengandung vitamin dan mineral yang mendukung kesehatan lambung, sebaiknya dikonsumsi dalam porsi kecil.", img: "assets/sayur8.png" },
        { nama: "Tumis Kentang + Nasi Putih + Jus Pisang", khasiat: "Sumber karbohidrat lembut yang ramah untuk lambung.", img: "assets/sayur9.png" },
        { nama: "Bubur + Telur Rebus + Air Hangat", khasiat: "Mudah dicerna dan membantu menenangkan lambung.", img: "assets/sayur10.png" },
        { nama: "Tumis Toge + Nasi Putih + Teh Chamomile", khasiat: "Kaya akan enzim alami yang membantu proses pencernaan.", img: "assets/sayur11.png" },
        { nama: "Tumis Asparagus + Nasi Putih + Susu Almond", khasiat: "Mengandung serat prebiotik yang baik untuk kesehatan lambung.", img: "assets/sayur12.png" },
    ],
    ikan: [
        { nama: "Ikan Gurame Bakar + Nasi Putih + Air Hangat", khasiat: "Sumber protein rendah lemak yang mudah dicerna oleh lambung.", img: "assets/ikan1.png" },
        { nama: "Sop Ikan Tuna + Nasi Jagung + Air Kelapa", khasiat: "Mengandung asam lemak omega-3 dan kaldu yang menenangkan lambung.", img: "assets/ikan2.png" },
        { nama: "Ikan Panggang + Nasi Merah + Jus Wortel", khasiat: "Rendah lemak dan kaya vitamin A yang baik untuk sistem pencernaan.", img: "assets/ikan3.png" },
        { nama: "Pepes Ikan Nila + Nasi Putih + Teh Chamomile", khasiat: "Dikukus tanpa minyak, kaya protein dan antioksidan alami dari daun kemangi.", img: "assets/ikan4.png" },
        { nama: "Sop Ikan Jahe + Nasi Putih + Air Jahe", khasiat: "Jahe membantu meredakan peradangan lambung dan memperlancar pencernaan.", img: "assets/ikan5.png" },
        { nama: "Salmon Panggang Asparagus + Nasi Merah + Air Putih", khasiat: "Kaya akan omega-3 dan serat yang menjaga kesehatan pencernaan.", img: "assets/ikan6.png" },
        { nama: "Ikan Bakar Madu + Nasi Putih + Jus Pisang", khasiat: "Madu memberikan efek menenangkan pada lambung, sementara ikan kaya protein.", img: "assets/ikan7.png" },
        { nama: "Steik Tuna Dabu-Dabu (Tanpa Cabai) + Nasi Putih + Teh Tawar", khasiat: "Kaya protein dan rendah lemak, aman untuk lambung jika tidak pedas.", img: "assets/ikan8.png" },
        { nama: "Ikan Dori Kuah Kuning + Nasi Jagung + Air Hangat", khasiat: "Kuah kunyit mengandung antiinflamasi yang baik untuk kesehatan lambung.", img: "assets/ikan9.png" },
        { nama: "Omelette Ikan Tuna + Nasi Putih + Susu Almond", khasiat: "Kombinasi protein hewani dan nabati yang mudah dicerna.", img: "assets/ikan10.png" },
        { nama: "Sop Ikan Kakap + Nasi Merah + Air Kelapa", khasiat: "Kaya mineral dan elektrolit yang menenangkan lambung.", img: "assets/ikan11.png" },
        { nama: "Ikan Goreng Sambal Kecap (Tanpa Pedas) + Nasi Putih + Air Hangat", khasiat: "Kombinasi rasa gurih dan manis yang tetap aman untuk lambung.", img: "assets/ikan12.png" }
    ],
    daging: [
        { nama: "Sate Daging Sapi (Tanpa Lemak) + Nasi Putih + Air Hangat", khasiat: "Sumber protein tinggi dengan tekstur lembut yang lebih mudah dicerna jika tidak terlalu berlemak.", img: "assets/daging1.png" },
        { nama: "Gudeg (Tanpa Santan Berlebih) + Nasi Putih + Teh Tawar", khasiat: "Kaya akan serat dari nangka muda, aman untuk lambung jika tidak terlalu manis atau pedas.", img: "assets/daging2.png" },
        { nama: "Soto Ayam + Nasi Putih + Air Jahe", khasiat: "Mengandung rempah yang membantu pencernaan dan daging ayam yang rendah lemak.", img: "assets/daging3.png" },
        { nama: "Sate Kambing (Tanpa Lemak) + Nasi Merah + Air Hangat", khasiat: "Mengandung zat besi dan protein, tetapi sebaiknya dikonsumsi dalam porsi kecil agar tidak membebani lambung.", img: "assets/daging4.png" },
        { nama: "Daging Teriyaki + Nasi Putih + Jus Wortel", khasiat: "Rasa manis gurih yang lembut di lambung, kaya akan protein dan zat besi.", img: "assets/daging5.png" },
        { nama: "Buncis Daging Cincang + Nasi Putih + Air Putih", khasiat: "Mengandung serat dan protein yang mendukung kesehatan pencernaan.", img: "assets/daging6.png" },
        { nama: "Sup Daging + Nasi Jagung + Air Hangat", khasiat: "Kaldu daging yang lembut membantu menenangkan lambung dan memperlancar pencernaan.", img: "assets/daging7.png" },
        { nama: "Sup Buntut + Nasi Merah + Air Kelapa", khasiat: "Kaya akan kolagen yang baik untuk regenerasi sel, tetapi sebaiknya dikonsumsi dalam jumlah sedang.", img: "assets/daging8.png" },
        { nama: "Ayam Bakar Madu + Nasi Putih + Jus Pisang", khasiat: "Rasa manis madu menenangkan lambung, sementara ayam memberikan protein yang mudah dicerna.", img: "assets/daging9.png" },
        { nama: "Ayam Goreng Mentega + Nasi Putih + Air Hangat", khasiat: "Lemak yang cukup rendah jika tidak terlalu berminyak, aman untuk lambung jika dikonsumsi dalam porsi wajar.", img: "assets/daging10.png" },
        { nama: "Asem-Asem Daging + Nasi Putih + Air Putih", khasiat: "Perpaduan rasa asam manis yang membantu merangsang enzim pencernaan, tetapi sebaiknya tidak terlalu asam.", img: "assets/daging11.png" },
        { nama: "Semur Ayam Kentang + Nasi Putih + Teh Chamomile", khasiat: "Mengandung protein dan karbohidrat yang baik untuk lambung, dengan kuah yang lembut.", img: "assets/daging12.png" }
    ]
};

let currentCategory = "sayur";
let tampilSemua = false;

function renderMakanan() {
    const list = document.getElementById("makanan-list");
    list.innerHTML = "";

    const jumlahTampil = tampilSemua ? 12 : 6;
    const data = makananData[currentCategory].slice(0, jumlahTampil);

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "makanan-card";
        card.innerHTML = `
            <img src="${item.img || 'https://via.placeholder.com/150'}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <p>${item.khasiat}</p>
        `;
        list.appendChild(card);
    });

    const seeAllButton = document.getElementById("see-all");
    seeAllButton.textContent = tampilSemua ? "Sembunyikan" : "Tampilkan Lebih Banyak";
}

function filterMakanan(kategori) {
    currentCategory = kategori;
    tampilSemua = false;
    renderMakanan();

    const kategoriButtons = document.querySelectorAll('.kategori span');
    kategoriButtons.forEach(button => button.classList.remove('active'));
    const activeButton = document.querySelector(`.kategori span[onclick="filterMakanan('${kategori}')"]`);
    activeButton.classList.add('active');
}
window.filterMakanan = filterMakanan;

function toggleMakanan() {
    tampilSemua = !tampilSemua;
    renderMakanan();
    if (!tampilSemua) {
        const makananSehatSection = document.querySelector('.makanan-sehat');
        makananSehatSection.scrollIntoView({ behavior: "smooth" });
    }
}
window.toggleMakanan = toggleMakanan;

renderMakanan();

// Daftar hari untuk memudahkan pengelolaan
const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// Transformasi data JSON menjadi array dengan id
let menus = [];
let idCounter = 1;

// Untuk melacak notifikasi yang sudah ditampilkan
let lastNotified = {};

// Jadwal notifikasi
const jadwalMakan = [
    { waktu: "07:00", pesan: "Saatnya sarapan pagi!", timeOfDay: "pagi" },
    { waktu: "11:28", pesan: "Saatnya makan siang!", timeOfDay: "siang" },
    { waktu: "18:00", pesan: "Saatnya makan malam!", timeOfDay: "malam" }
];

fetch('makanan.json')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.log("Data berhasil dimuat:", data);

        // Transformasi data menjadi array dengan id
        for (const category in data) {
            data[category].forEach(menu => {
                menus.push({
                    id: idCounter++,
                    name: menu.nama,
                    kategori: menu.kategori
                });
            });
        }

        // Fungsi untuk menentukan bobot berdasarkan id
        function getBobot(id) {
            // Sayur
            if ([1, 4, 9, 12].includes(id)) return 1; // Sayur Bening, Sup Brokoli, Bubur, Sop Ayam
            if ([2, 3, 6, 11].includes(id)) return 2; // Cah Kembang Kol, Tahu Tumis, Cah Kangkung, Tumis Asparagus
            if ([5, 7, 8, 10].includes(id)) return 3; // Gado-gado, Sayur Asem, Tumis Kentang, Tumis Toge
            // Ikan
            if ([14, 17, 22, 23].includes(id)) return 1; // Sop Ikan Tuna, Sop Ikan Jahe, Omelette Ikan Tuna, Sop Ikan Kakap
            if ([15, 16, 18, 21].includes(id)) return 2; // Ikan Panggang, Pepes Ikan Nila, Salmon Panggang, Ikan Dori Kuah Kuning
            if ([13, 19, 20, 24].includes(id)) return 3; // Ikan Gurame Bakar, Ikan Bakar Madu, Steik Tuna, Ikan Goreng
            // Daging
            if ([27, 30, 31, 32].includes(id)) return 1; // Soto Ayam, Buncis Daging Cincang, Sup Daging, Sup Buntut
            if ([25, 28, 29, 36].includes(id)) return 2; // Sate Daging Sapi, Sate Kambing, Daging Teriyaki, Semur Ayam Kentang
            if ([26, 33, 34, 35].includes(id)) return 3; // Gudeg, Ayam Bakar Madu, Ayam Goreng Mentega, Asem-Asem Daging
            return 1; // Default bobot jika id tidak ditemukan
        }

        // Tambahkan bobot ke menu tanpa mengubah data asli
        const menusWithBobot = menus.map(menu => ({
            ...menu,
            bobot: getBobot(menu.id)
        }));

        // Tambahkan id ke dropdown dan inisialisasi
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach((row, rowIndex) => {
            const day = days[rowIndex];
            const dropdowns = row.querySelectorAll('select');
            dropdowns.forEach((dropdown, dropdownIndex) => {
                let timeOfDay;
                if (dropdownIndex === 0) timeOfDay = "pagi";
                else if (dropdownIndex === 1) timeOfDay = "siang";
                else timeOfDay = "malam";

                // Tambahkan id unik ke dropdown
                dropdown.id = `${day.toLowerCase()}-${timeOfDay}`;
                dropdown.setAttribute("data-day", day);
                dropdown.setAttribute("data-time", timeOfDay);

                // Inisialisasi semua dropdown dengan semua menu
                dropdown.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                menusWithBobot.forEach(menu => {
                    const option = document.createElement('option');
                    option.value = menu.id;
                    option.textContent = `${menu.name} (${menu.kategori})`;
                    dropdown.appendChild(option);
                });
            });
        });

        // Tambahkan event listener untuk setiap dropdown
        document.querySelectorAll('select').forEach(dropdown => {
            dropdown.addEventListener('change', (event) => {
                const id = event.target.id;
                const value = event.target.value;
                const day = event.target.getAttribute("data-day");
                const timeOfDay = event.target.getAttribute("data-time");

                // Simpan ke localStorage
                saveToSessionStorage(id, value);

                // Perbarui dropdown berikutnya berdasarkan bobot
                const pagiSelect = document.querySelector(`select[data-day="${day}"][data-time="pagi"]`);
                const siangSelect = document.querySelector(`select[data-day="${day}"][data-time="siang"]`);
                const malamSelect = document.querySelector(`select[data-day="${day}"][data-time="malam"]`);

                if (timeOfDay === "pagi") {
                    const selectedPagiId = parseInt(pagiSelect.value);
                    const selectedPagiBobot = selectedPagiId ? getBobot(selectedPagiId) : null;

                    // Siang: Tidak boleh memilih bobot yang sama dengan pagi
                    let availableBobotsSiang = [1, 2, 3];
                    if (selectedPagiBobot) {
                        availableBobotsSiang = availableBobotsSiang.filter(bobot => bobot !== selectedPagiBobot);
                    }
                    const availableMenusSiang = menusWithBobot.filter(menu => availableBobotsSiang.includes(menu.bobot));
                    const currentSiangValue = siangSelect.value;
                    siangSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                    availableMenusSiang.forEach(menu => {
                        const option = document.createElement('option');
                        option.value = menu.id;
                        option.textContent = `${menu.name} (${menu.kategori})`;
                        siangSelect.appendChild(option);
                    });
                    siangSelect.value = currentSiangValue && availableBobotsSiang.includes(getBobot(parseInt(currentSiangValue))) ? currentSiangValue : "";

                    // Reset malam saat pagi berubah
                    const currentMalamValue = malamSelect.value;
                    malamSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                    malamSelect.value = "";
                    saveToSessionStorage(siangSelect.id, siangSelect.value);
                    saveToSessionStorage(malamSelect.id, "");
                } else if (timeOfDay === "siang") {
                    const selectedPagiId = parseInt(pagiSelect.value);
                    const selectedPagiBobot = selectedPagiId ? getBobot(selectedPagiId) : null;
                    const selectedSiangId = parseInt(siangSelect.value);
                    const selectedSiangBobot = selectedSiangId ? getBobot(selectedSiangId) : null;

                    // Malam: Hanya boleh memilih bobot yang belum digunakan
                    let availableBobotsMalam = [1, 2, 3].filter(bobot => ![selectedPagiBobot, selectedSiangBobot].includes(bobot));
                    if (availableBobotsMalam.length === 0 && selectedSiangBobot) {
                        availableBobotsMalam = [selectedSiangBobot];
                    }
                    const availableMenusMalam = menusWithBobot.filter(menu => availableBobotsMalam.includes(menu.bobot));
                    const currentMalamValue = malamSelect.value;
                    malamSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                    availableMenusMalam.forEach(menu => {
                        const option = document.createElement('option');
                        option.value = menu.id;
                        option.textContent = `${menu.name} (${menu.kategori})`;
                        malamSelect.appendChild(option);
                    });
                    malamSelect.value = currentMalamValue && availableBobotsMalam.includes(getBobot(parseInt(currentMalamValue))) ? currentMalamValue : "";
                    saveToSessionStorage(malamSelect.id, malamSelect.value);
                }
            });
        });

        // Load data dari localStorage
        loadStoredData();

        // Perbarui dropdown siang dan malam berdasarkan data yang disimpan
        days.forEach(day => {
            const pagiSelect = document.querySelector(`select[data-day="${day}"][data-time="pagi"]`);
            const siangSelect = document.querySelector(`select[data-day="${day}"][data-time="siang"]`);
            const malamSelect = document.querySelector(`select[data-day="${day}"][data-time="malam"]`);

            const selectedPagiId = parseInt(pagiSelect.value);
            const selectedPagiBobot = selectedPagiId ? getBobot(selectedPagiId) : null;

            if (selectedPagiBobot) {
                let availableBobotsSiang = [1, 2, 3].filter(bobot => bobot !== selectedPagiBobot);
                const availableMenusSiang = menusWithBobot.filter(menu => availableBobotsSiang.includes(menu.bobot));
                const currentSiangValue = siangSelect.value;
                siangSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                availableMenusSiang.forEach(menu => {
                    const option = document.createElement('option');
                    option.value = menu.id;
                    option.textContent = `${menu.name} (${menu.kategori})`;
                    siangSelect.appendChild(option);
                });
                siangSelect.value = currentSiangValue && availableBobotsSiang.includes(getBobot(parseInt(currentSiangValue))) ? currentSiangValue : "";

                const selectedSiangId = parseInt(siangSelect.value);
                const selectedSiangBobot = selectedSiangId ? getBobot(selectedSiangId) : null;

                if (selectedSiangBobot) {
                    let availableBobotsMalam = [1, 2, 3].filter(bobot => ![selectedPagiBobot, selectedSiangBobot].includes(bobot));
                    if (availableBobotsMalam.length === 0) {
                        availableBobotsMalam = [selectedSiangBobot];
                    }
                    const availableMenusMalam = menusWithBobot.filter(menu => availableBobotsMalam.includes(menu.bobot));
                    const currentMalamValue = malamSelect.value;
                    malamSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
                    availableMenusMalam.forEach(menu => {
                        const option = document.createElement('option');
                        option.value = menu.id;
                        option.textContent = `${menu.name} (${menu.kategori})`;
                        malamSelect.appendChild(option);
                    });
                    malamSelect.value = currentMalamValue && availableBobotsMalam.includes(getBobot(parseInt(currentMalamValue))) ? currentMalamValue : "";
                }
            }
        });

        // Mulai pemeriksaan notifikasi
        mulaiPemeriksaanNotifikasi();
    })
    .catch(error => console.error('Error loading data:', error));

// Fungsi untuk menyimpan ke localStorage
function saveToSessionStorage(id, value) {
    let storedData = JSON.parse(sessionStorage.getItem('mealSchedule')) || {};
    storedData[id] = value;
    sessionStorage.setItem('mealSchedule', JSON.stringify(storedData));
    console.log(`Data disimpan: ${id} = ${value}`);
}

// Fungsi untuk memuat data dari sessionStorage
function loadStoredData() {
    let storedData = JSON.parse(sessionStorage.getItem('mealSchedule')) || {};
    for (let id in storedData) {
        const dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.value = storedData[id];
            console.log(`Data dimuat: ${id} = ${storedData[id]}`);
        }
    }
}

// Fungsi untuk mendapatkan menu yang dipilih berdasarkan hari dan waktu
function getSelectedMenu(day, timeOfDay) {
    const dropdown = document.querySelector(`select[data-day="${day}"][data-time="${timeOfDay}"]`);
    if (!dropdown) {
        console.warn(`Dropdown tidak ditemukan untuk ${day} ${timeOfDay}`);
        return "Dropdown tidak ditemukan";
    }
    if (dropdown.value) {
        const selectedId = parseInt(dropdown.value);
        const selectedMenu = menus.find(menu => menu.id === selectedId);
        if (selectedMenu) {
            console.log(`Menu terpilih untuk ${day} ${timeOfDay}: ${selectedMenu.name}`);
            return selectedMenu.name;
        } else {
            console.warn(`Menu dengan ID ${selectedId} tidak ditemukan di menus`);
            return "Menu tidak valid";
        }
    }
    console.log(`Tidak ada menu terpilih untuk ${day} ${timeOfDay}`);
    return "Belum memilih menu";
}

// Fungsi untuk menampilkan notifikasi
function tampilkanNotifikasi(pesan, timeOfDay) {
    const today = new Date();
    const dayIndex = today.getDay();
    const currentDay = days[dayIndex === 0 ? 6 : dayIndex - 1];

    const selectedMenu = getSelectedMenu(currentDay, timeOfDay);
    const fullMessage = `${pesan} Menu: ${selectedMenu}`;

    if (!("Notification" in window)) {
        console.warn("Browser tidak mendukung notifikasi. Menggunakan alert sebagai fallback.");
        alert(fullMessage);
        return;
    }

    if (Notification.permission === "granted") {
        new Notification("Pengingat Makan", { body: fullMessage });
        console.log(`Notifikasi ditampilkan: ${fullMessage}`);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Pengingat Makan", { body: fullMessage });
                console.log(`Notifikasi ditampilkan setelah izin diberikan: ${fullMessage}`);
            } else {
                console.warn("Izin notifikasi ditolak. Menggunakan alert sebagai fallback.");
                alert(fullMessage);
            }
        });
    } else {
        console.warn("Notifikasi diblokir oleh pengguna. Menggunakan alert sebagai fallback.");
        alert(fullMessage);
    }
}

// Fungsi untuk memeriksa waktu makan dengan toleransi
function cekWaktuMakan() {
    const sekarang = new Date();
    const jamSekarang = sekarang.getHours();
    const menitSekarang = sekarang.getMinutes();
    const tanggalSekarang = sekarang.toISOString().split('T')[0];

    jadwalMakan.forEach(jadwal => {
        const [jadwalJam, jadwalMenit] = jadwal.waktu.split(':').map(Number);
        const menitSekarangTotal = jamSekarang * 60 + menitSekarang;
        const menitJadwalTotal = jadwalJam * 60 + jadwalMenit;

        // Toleransi ±1 menit
        if (Math.abs(menitSekarangTotal - menitJadwalTotal) <= 1) {
            const notifKey = `${tanggalSekarang}-${jadwal.waktu}`;
            if (!lastNotified[notifKey]) {
                tampilkanNotifikasi(jadwal.pesan, jadwal.timeOfDay);
                lastNotified[notifKey] = true;
                console.log(`Notifikasi dijadwalkan untuk ${jadwal.waktu}: ${jadwal.pesan}`);
            }
        }
    });

    // Bersihkan lastNotified untuk hari sebelumnya
    Object.keys(lastNotified).forEach(key => {
        const date = key.split('-').slice(0, 3).join('-');
        if (date !== tanggalSekarang) {
            delete lastNotified[key];
        }
    });
}

// Jalankan cekWaktuMakan setiap menit
function mulaiPemeriksaanNotifikasi() {
    cekWaktuMakan(); // Panggil sekali saat mulai
    setInterval(cekWaktuMakan, 60 * 1000); // Periksa setiap 60 detik
}

// Tips Manajemen Stres - Popup Logic
const stressButtons = document.querySelectorAll('.stress-button');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closePopup = document.querySelector('.close-popup');

const stressTips = [
    {
        title: "Latihan Pernapasan Dalam",
        video: "https://youtu.be/PurmfahDdj8?si=Lj5Hgc1iO8UwhWMv"
    },
    {
        title: "Makan dengan Pola Teratur",
        video: "https://youtu.be/_N9_pUIhHbU?si=CYtXJKX238k2qD-W"
    },
    {
        title: "Batasi Konsumsi Kafein dan Alkohol",
        video: "https://youtu.be/dPSSYt4Ukoc?si=FRo3qypsWhfyAQoB"   
    },
    {
        title: "Tidur yang Cukup",
        video: "https://youtu.be/OOpriKf35A4?si=bLDjdd_9vsiQCnAH"
    },
    {
        title: "Kelola Beban Kerja dan Rutinitas dengan Baik",
        video: "https://youtu.be/srkG0zqJZSw?si=mQ7P8bCvzu0ofGyk"
    },
    {
        title: "Olahraga Ringan Teratur",
        video: "https://youtu.be/cxMNnGfP0NA?si=lUnzrcJNyRDp4eJF"
    }
];

function getYouTubeId(url) {
    // Pola untuk mencocokkan ID video dari berbagai format URL YouTube
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Fungsi untuk membuka pop-up dengan thumbnail
stressButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const tip = stressTips[index];
        const videoId = getYouTubeId(tip.video);

        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            popup.querySelector('.popup-content').innerHTML = `
                <h3>${tip.title}</h3>
                <div class="video-container">
                    <img class="video-thumbnail" src="${thumbnailUrl}" alt="${tip.title}" data-video-id="${videoId}">
                </div>
                <a href="${tip.video}" target="_blank">Buka di YouTube</a>
            `;
            popup.classList.add('active');
            overlay.classList.add('active');

            // Tambahkan event listener untuk thumbnail
            const thumbnail = popup.querySelector('.video-thumbnail');
            thumbnail.addEventListener('click', () => {
                const videoContainer = popup.querySelector('.video-container');
                videoContainer.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                `;
            });
        } else {
            // Jika ID video tidak valid, tampilkan pesan error
            popup.querySelector('.popup-content').innerHTML = `
                <h3>${tip.title}</h3>
                <p>Video tidak tersedia. Silakan cek URL video.</p>
                <a href="${tip.video}" target="_blank">Buka di YouTube</a>
            `;
            popup.classList.add('active');
            overlay.classList.add('active');
        }
    });
});

// Fungsi untuk menutup pop-up
closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

// Fungsi untuk mengecek elemen yang terlihat saat scroll
function handleScroll() {
    const sections = document.querySelectorAll('.makanan-sehat, .container, .wrapper, .footer-content');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);
})();