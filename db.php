<?php
$host = 'localhost';
$user = 'root';
$password = ''; // Sesuaikan dengan password MySQL Anda
$dbname = 'gastrocare_db';

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
