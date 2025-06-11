<?php
header('Content-Type: application/json');
require '../db.php';

// Ambil pesan dari frontend
$input = json_decode(file_get_contents('php://input'), true);
$userMessage = $input['message'] ?? '';

if (empty($userMessage)) {
    echo json_encode(['answer' => 'Maaf, saya tidak menerima pesan apapun.']);
    exit;
}

// Cek data dalam database
function searchDatabase($conn, $query) {
    $cleanedQuery = preg_replace('/[^\p{L}\s]/u', '', strtolower($query));
    $normalizedQuery = trim(preg_replace('/\s+/', ' ', $cleanedQuery));

    // ATURAN 1: Definisi Penyakit (Format: "apa itu [nama penyakit]")
    $prefix = 'apa itu ';
    if (strpos($normalizedQuery, $prefix) === 0) {
        $diseaseName = substr($normalizedQuery, strlen($prefix));
        
        $stmt = $conn->prepare("SELECT title, description FROM education_jenis_penyakit WHERE LOWER(title) = ? LIMIT 1");
        if ($stmt) {
            $stmt->bind_param('s', $diseaseName);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($row = $result->fetch_assoc()) {
                $stmt->close();
                return "Ini informasi mengenai **" . htmlspecialchars($row['title']) . "**: " . htmlspecialchars($row['description']);
            }
            $stmt->close();
        }
    }

    // ATURAN 2: Daftar Item (Format: "apa saja [tipe list] penyakit lambung")
    $prefix = 'apa saja ';
    $suffix = ' penyakit lambung';
    if (strpos($normalizedQuery, $prefix) === 0 && substr($normalizedQuery, -strlen($suffix)) === $suffix) {
        $start = strlen($prefix);
        $end = strlen($normalizedQuery) - strlen($suffix);
        $sectionType = trim(substr($normalizedQuery, $start, $end - $start));
        
        $allowedTypes = ['gejala', 'penyebab', 'pencegahan', 'pengobatan'];
        
        if (in_array($sectionType, $allowedTypes)) {
            $stmt = $conn->prepare("SELECT item_text FROM education_list_items WHERE section_type = ? ORDER BY display_order ASC");
            if ($stmt) {
                $stmt->bind_param('s', $sectionType);
                $stmt->execute();
                $result = $stmt->get_result();
                $items = $result->fetch_all(MYSQLI_ASSOC);
                $stmt->close();

                if (count($items) > 0) {
                    $response = "Tentu, berikut adalah daftar untuk **" . ucfirst($sectionType) . "** penyakit lambung:\n";
                    foreach ($items as $item) {
                        $response .= "- " . htmlspecialchars($item['item_text']) . "\n";
                    }
                    return $response;
                }
            }
        }
    }

    // ATURAN 3: Teks Statis (Pengertian Umum)
    if ($normalizedQuery === 'apa itu penyakit lambung' || $normalizedQuery === 'apa pengertian penyakit lambung') {
        $stmt = $conn->prepare("SELECT content FROM education_static_text WHERE section_key = 'pengertian' LIMIT 1");
        if ($stmt) {
            $stmt->execute();
            $result = $stmt->get_result();
            if ($row = $result->fetch_assoc()) {
                $stmt->close();
                return htmlspecialchars($row['content']);
            }
            $stmt->close();
        }
    }

    // Jika tidak ada aturan yang cocok, kembalikan null untuk diteruskan ke Gemini
    return null;
}


// --- LOGIKA UTAMA & FUNGSI API ---
$db_answer = searchDatabase($conn, $userMessage);

if ($db_answer !== null) {
    echo json_encode(['source' => 'database', 'answer' => $db_answer]);
} else {
    $gemini_answer = callGeminiAPI_with_curl($userMessage);
    echo json_encode(['source' => 'gemini', 'answer' => $gemini_answer]);
}
$conn->close();

function callGeminiAPI_with_curl($message) {
    $apiKey = "AIzaSyDbowFojuV48wvK3C1Pje_Xp4RYcbyDByw";
    $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" . $apiKey;
    $full_prompt = "Namamu adalah GastroBot, AI yang fokus pada kesehatan lambung. Jawab pertanyaan user berikut ini. Jika pertanyaannya di luar topik lambung, tolak dengan sopan dengan mengatakan 'Maaf, saya hanya bisa menjawab pertanyaan seputar kesehatan lambung.'. Pertanyaan: " . $message;
    $data = ['contents' => [['parts' => [['text' => $full_prompt]]]]];
    $payload = json_encode($data);
    $ch = curl_init($url);
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    $result = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);

    curl_close($ch);
    
    if ($result === false || $httpcode != 200) {
        return "Maaf, terjadi sedikit gangguan saat mencoba menghubungi asisten AI. Silakan coba beberapa saat lagi. (Detail Error: " . $error . ")";
    }
    $response = json_decode($result, true);
    
    if (isset($response['candidates'][0]['finishReason']) && $response['candidates'][0]['finishReason'] == 'SAFETY') {
        return "Maaf, pertanyaan Anda tidak dapat saya proses karena melanggar kebijakan keamanan.";
    }
    return $response['candidates'][0]['content']['parts'][0]['text'] ?? "Maaf, saya tidak dapat memproses jawaban saat ini.";
}