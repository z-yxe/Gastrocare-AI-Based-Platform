<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: ../_Login/login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesi 2: Kebiasaan Makan & Gaya Hidup</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="../_Chatbot/chatbot.css">
    <link rel="stylesheet" href="../_Template/template.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
</head>
<body>
    <!-- Navigasi -->
    <nav>
        <div class="nav-header">
            <a href="../main.php" class="nav-close"><img src="assets/close.png" id="close-btn" alt="Tutup" /></a>
            <a href="#" class="nav-logo"><img src="assets/logo.png" alt="Logo"></a>
            
            <div class="nav-profile">
                <img src="assets/user.png" alt="profile">
                <span>Nama User</span>
                <i class='bx bx-caret-down'></i>
                <button class="login-button" id="login-btn">Login</button>
                <div class="profile-dropdown" id="profile-dropdown">
                    <button id="logout-btn" class="logout-button">Logout</button>
                </div>
            </div>
            
            <!-- Hamburger Menu untuk Mobile -->
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <ul class="mobile-menu">
            <!-- Mobile Profile Info -->
            <div class="profile-info" id="mobile-profile-info">
                <img src="assets/user.png" alt="profile">
                <span>Nama User</span>
            </div>
            
            <!-- Mobile Login Button -->
            <button class="login-button-mobile" id="login-btn-mobile">Login</button>
            
            <!-- Mobile Logout Button -->
            <button id="logout-btn-mobile" class="logout-button-mobile">Logout</button>
        </ul>
    </nav>

    <!-- Progress Bar -->
    <div class="progress-container">
        <h2>Lengkapi Pertanyaan Dengan Data Yang Sesuai!</h2>
        <div class="steps">
            <div class="step active" data-step="1"><span>1</span></div>
            <div class="step" data-step="2"><span>2</span></div>
            <div class="step" data-step="3"><span>3</span></div>
            <div class="step" data-step="4"><span>4</span></div>
            <div class="step" data-step="5"><span>5</span></div>
            <div class="step" data-step="6"><span>6</span></div>
        </div>
    </div>

    <div class="container1">
        <form id="diagnosis-form" onsubmit="saveFormData(event, 'session3.php')">
            <div class="question-session active">
                <h2>Seberapa sering Anda makan dalam sehari?</h2>
                <div class="form-group">
                    <button type="button" class="option-btn" data-field="meal_frequency" data-value="1" onclick="selectOption(this, 'meal_frequency', '1')">1 kali</button>
                    <button type="button" class="option-btn" data-field="meal_frequency" data-value="2" onclick="selectOption(this, 'meal_frequency', '2')">2 kali</button>
                    <button type="button" class="option-btn" data-field="meal_frequency" data-value="3" onclick="selectOption(this, 'meal_frequency', '3')">3 kali</button>
                    <button type="button" class="option-btn" data-field="meal_frequency" data-value="more" onclick="selectOption(this, 'meal_frequency', 'more')">Lebih dari 3 kali</button>
                    <input type="hidden" id="meal_frequency" name="meal_frequency" required>
                </div>
                <h2>Apakah Anda sering melewatkan waktu makan?</h2>
                <div class="form-group">
                    <button type="button" class="option-btn" data-field="skip_meals" data-value="often" onclick="selectOption(this, 'skip_meals', 'often')">Sering</button>
                    <button type="button" class="option-btn" data-field="skip_meals" data-value="sometimes" onclick="selectOption(this, 'skip_meals', 'sometimes')">Kadang-kadang</button>
                    <button type="button" class="option-btn" data-field="skip_meals" data-value="rarely" onclick="selectOption(this, 'skip_meals', 'rarely')">Jarang</button>
                    <button type="button" class="option-btn" data-field="skip_meals" data-value="never" onclick="selectOption(this, 'skip_meals', 'never')">Tidak pernah</button>
                    <input type="hidden" id="skip_meals" name="skip_meals" required>
                </div>
            </div>
            <div class="navigation-buttons">
                <button type="button" class="btn secondary" onclick="window.location.href='session1.php'">Kembali</button>
                <button type="submit" class="btn primary">Lanjut</button>
            </div>
        </form>
    </div>

    <!-- FOOTER -->
    <footer class="footer-content">
        <div class="container">
            <div class="footer-content-content">
                <h2 class="footer-content-logo">GASTROCARE</h2>
    
                <div class="footer-content-main">
                <h3 class="footer-content-title">Butuh Bantuan untuk Kesehatan Lambung Anda?</h3>
                <p class="footer-content-desc">
                    Dapatkan wawasan akurat, analisis bertenaga AI, dan panduan yang didukung pakar tentang semua kondisi terkait lambung. Sistem cerdas kami membantu Anda memahami gejala, pencegahan, dan pilihan pengobatan hanya dalam beberapa
                    klik.
                </p>
                </div>
    
                <div class="footer-content-bottom">
                <p class="copyright">© 2025 GASTROCARE</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Chatbot -->
    <button id="chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-rounded">close</span>
    </button>

    <div class="chatbot-popup">
        <div class="chat-header">
            <div class="header-info">
                <svg class="chatbot-logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                </svg>
                <h2 class="logo-text">GastroBot</h2>
            </div>
            <button id="close-chatbot" class="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        <!-- Chatbot Body -->
        <div class="chat-body">
            <div class="message bot-message">
                <svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                </svg>
                <div class="message-text">Hai, User 👋 <br>Ada yang bisa saya bantu?</div>
            </div>
        </div>

        <!-- Chatbot Footer -->
        <div class="chat-footer">
            <form action="#" class="chat-form">
                <textarea placeholder="Ask anything . . ." class="message-input" required></textarea>
                <div class="chat-controls">
                    <button type="submit" id="send-message" class="material-symbols-rounded">arrow_upward</button>
                </div>
            </form>
        </div>
    </div>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="../main.js"></script>
    <script src="js/script1.js"></script>
    <script src="../_Chatbot/chatbot.js"></script>
    <script src="../_Template/profile.js"></script>
    <script>
    // Sinkronisasi session login PHP ke sessionStorage
    fetch('../get_user.php')
      .then(res => res.json())
      .then(data => {
        if (data.loggedIn) {
          sessionStorage.setItem('loggedInUser', data.username);
          sessionStorage.setItem('userRole', data.role);
        } else {
          sessionStorage.removeItem('loggedInUser');
          sessionStorage.removeItem('userRole');
        }
        if (typeof updateProfile === 'function') updateProfile();
      });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            updateProgressBar(2);
            loadFormData();
        });
    </script>
    <script>
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        window.location.href = '../logout.php';
    });

    // Mobile logout button
    const mobileLogoutBtn = document.getElementById('logout-btn-mobile');
    if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', function() {
            window.location.href = '../logout.php';
        });
    }
    </script>
</body>
</html>