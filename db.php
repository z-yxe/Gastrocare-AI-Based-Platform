<?php
$host = 'localhost';
$user = 'root';
$password = ''; // Adjust with your MySQL password
$dbname = 'gastrocare_db';

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset to UTF-8
$conn->set_charset("utf8mb4");
?>