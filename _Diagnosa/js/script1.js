// Function to calculate BMI
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

// Function to calculate the total score based on user answers
function calculateScore(data) {
    let score = 0;
    const scores = {};

    // Sesi 1: Data Diri
    // Gender
    if (data.gender === 'male') {
        score += 2;
        scores['Apa jenis kelamin anda?'] = { answer: 'Laki - Laki', points: 2 };
    } else if (data.gender === 'female') {
        score += 1;
        scores['Apa jenis kelamin anda?'] = { answer: 'Perempuan', points: 1 };
    }

    // Age
    if (data.age === '0-20') {
        score += 1;
        scores['Berapa usia anda saat ini?'] = { answer: '0-20 tahun', points: 1 };
    } else if (data.age === '21-40') {
        score += 3;
        scores['Berapa usia anda saat ini?'] = { answer: '21-40 tahun', points: 3 };
    } else if (data.age === '41-60') {
        score += 5;
        scores['Berapa usia anda saat ini?'] = { answer: '41-60 tahun', points: 5 };
    } else if (data.age === '61+') {
        score += 7;
        scores['Berapa usia anda saat ini?'] = { answer: '61+ tahun', points: 7 };
    }

    // BMI
    if (data.weight && data.height) {
        const bmi = calculateBMI(parseFloat(data.weight), parseFloat(data.height));
        let bmiPoints = 0;
        let bmiCategory = '';
        if (bmi < 18.5) {
            bmiPoints = 3;
            bmiCategory = 'Kurus';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiPoints = 0;
            bmiCategory = 'Normal';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiPoints = 4;
            bmiCategory = 'Kelebihan Berat Badan';
        } else {
            bmiPoints = 6;
            bmiCategory = 'Obesitas';
        }
        score += bmiPoints;
        scores['Berapa berat badan anda? (kg)'] = { answer: `${data.weight} kg`, points: bmiPoints };
        scores['Berapa tinggi badan anda? (cm)'] = { answer: `${data.height} cm (BMI: ${bmi.toFixed(1)} - ${bmiCategory})`, points: 0 };
    }

    // Chronic Diseases
    if (data.chronic_disease) {
        const chronicPoints = data.chronic_disease.length * 4;
        score += chronicPoints;
        scores['Apakah Anda memiliki riwayat penyakit kronis?'] = { answer: data.chronic_disease.length > 0 ? data.chronic_disease.join(', ') : 'Tidak', points: chronicPoints };
    } else {
        scores['Apakah Anda memiliki riwayat penyakit kronis?'] = { answer: 'Tidak', points: 0 };
    }

    // Smoking/Alcohol
    if (data.smoking_alcohol === 'yes') {
        score += 8;
        scores['Apakah Anda mengonsumsi rokok atau alkohol?'] = { answer: 'Ya', points: 8 };
    } else {
        scores['Apakah Anda mengonsumsi rokok atau alkohol?'] = { answer: 'Tidak', points: 0 };
    }

    // Sesi 2: Kebiasaan Makan
    if (data.meal_frequency === '1' || data.meal_frequency === '2') {
        score += 2;
        scores['Seberapa sering Anda makan dalam sehari?'] = { answer: data.meal_frequency === '1' ? '1 kali' : '2 kali', points: 2 };
    } else {
        scores['Seberapa sering Anda makan dalam sehari?'] = { answer: data.meal_frequency === '3' ? '3 kali' : 'Lebih dari 3 kali', points: 0 };
    }

    if (data.skip_meals === 'often' || data.skip_meals === 'sometimes') {
        score += 2;
        scores['Apakah Anda sering melewatkan waktu makan?'] = { answer: data.skip_meals === 'often' ? 'Sering' : 'Kadang-kadang', points: 2 };
    } else {
        scores['Apakah Anda sering melewatkan waktu makan?'] = { answer: data.skip_meals === 'rarely' ? 'Jarang' : 'Tidak pernah', points: 0 };
    }

    // Sesi 3: Gejala Fisik
    if (data.stomach_pain === 'often') {
        score += 3;
        scores['Seberapa sering Anda mengalami nyeri atau rasa tidak nyaman di perut bagian atas?'] = { answer: 'Sering', points: 3 };
    } else if (data.stomach_pain === 'sometimes') {
        score += 2;
        scores['Seberapa sering Anda mengalami nyeri atau rasa tidak nyaman di perut bagian atas?'] = { answer: 'Kadang-kadang', points: 2 };
    } else {
        scores['Seberapa sering Anda mengalami nyeri atau rasa tidak nyaman di perut bagian atas?'] = { answer: data.stomach_pain === 'rarely' ? 'Jarang' : 'Tidak pernah', points: 0 };
    }

    if (data.nausea === 'often') {
        score += 3;
        scores['Apakah Anda sering merasa mual?'] = { answer: 'Sering', points: 3 };
    } else if (data.nausea === 'sometimes') {
        score += 2;
        scores['Apakah Anda sering merasa mual?'] = { answer: 'Kadang-kadang', points: 2 };
    } else {
        scores['Apakah Anda sering merasa mual?'] = { answer: data.nausea === 'rarely' ? 'Jarang' : 'Tidak pernah', points: 0 };
    }

    if (data.vomiting === 'often') {
        score += 3;
        scores['Apakah Anda sering mengalami muntah?'] = { answer: 'Sering', points: 3 };
    } else if (data.vomiting === 'sometimes') {
        score += 2;
        scores['Apakah Anda sering mengalami muntah?'] = { answer: 'Kadang-kadang', points: 2 };
    } else {
        scores['Apakah Anda sering mengalami muntah?'] = { answer: data.vomiting === 'rarely' ? 'Jarang' : 'Tidak pernah', points: 0 };
    }

    if (data.bloating === 'often') {
        score += 2;
        scores['Apakah Anda sering merasa kembung setelah makan?'] = { answer: 'Sering', points: 2 };
    } else if (data.bloating === 'sometimes') {
        score += 1;
        scores['Apakah Anda sering merasa kembung setelah makan?'] = { answer: 'Kadang-kadang', points: 1 };
    } else {
        scores['Apakah Anda sering merasa kembung setelah makan?'] = { answer: data.bloating === 'rarely' ? 'Jarang' : 'Tidak pernah', points: 0 };
    }

    if (data.blood_vomit === 'yes') {
        score += 5;
        scores['Apakah Anda pernah mengalami muntah darah atau tinja berwarna hitam?'] = { answer: 'Ya', points: 5 };
    } else {
        scores['Apakah Anda pernah mengalami muntah darah atau tinja berwarna hitam?'] = { answer: 'Tidak', points: 0 };
    }

    if (data.weight_loss === 'yes') {
        score += 4;
        scores['Apakah Anda mengalami penurunan berat badan yang tidak dapat dijelaskan?'] = { answer: 'Ya', points: 4 };
    } else {
        scores['Apakah Anda mengalami penurunan berat badan yang tidak dapat dijelaskan?'] = { answer: 'Tidak', points: 0 };
    }

    if (data.pain_after_eating === 'worse') {
        score += 2;
        scores['Apakah nyeri perut Anda membaik atau memburuk setelah makan?'] = { answer: 'Memburuk', points: 2 };
    } else {
        scores['Apakah nyeri perut Anda membaik atau memburuk setelah makan?'] = { answer: data.pain_after_eating === 'better' ? 'Membaik' : 'Tidak berubah', points: 0 };
    }

    // Sesi 4: Riwayat Kesehatan
    if (data.history === 'yes') {
        score += 3;
        scores['Apakah Anda pernah didiagnosis dengan penyakit lambung sebelumnya (seperti maag, GERD, dll)?'] = { answer: 'Ya', points: 3 };
    } else {
        scores['Apakah Anda pernah didiagnosis dengan penyakit lambung sebelumnya (seperti maag, GERD, dll)?'] = { answer: 'Tidak', points: 0 };
    }

    if (data.medication === 'yes') {
        score += 2;
        scores['Apakah Anda sedang mengonsumsi obat-obatan tertentu secara rutin?'] = { answer: 'Ya', points: 2 };
    } else {
        scores['Apakah Anda sedang mengonsumsi obat-obatan tertentu secara rutin?'] = { answer: 'Tidak', points: 0 };
    }

    if (data.family_history === 'yes') {
        score += 2;
        scores['Apakah ada anggota keluarga Anda yang memiliki riwayat penyakit lambung?'] = { answer: 'Ya', points: 2 };
    } else {
        scores['Apakah ada anggota keluarga Anda yang memiliki riwayat penyakit lambung?'] = { answer: 'Tidak', points: 0 };
    }

    // Sesi 5: Faktor Psikologis
    if (data.stress_level === 'high') {
        score += 3;
        scores['Bagaimana tingkat stres Anda dalam sebulan terakhir?'] = { answer: 'Tinggi', points: 3 };
    } else if (data.stress_level === 'moderate') {
        score += 2;
        scores['Bagaimana tingkat stres Anda dalam sebulan terakhir?'] = { answer: 'Sedang', points: 2 };
    } else {
        scores['Bagaimana tingkat stres Anda dalam sebulan terakhir?'] = { answer: 'Rendah', points: 0 };
    }

    if (data.anxiety === 'often') {
        score += 2;
        scores['Apakah Anda sering merasa cemas atau depresi?'] = { answer: 'Sering', points: 2 };
    } else if (data.anxiety === 'sometimes') {
        score += 1;
        scores['Apakah Anda sering merasa cemas atau depresi?'] = { answer: 'Kadang-kadang', points: 1 };
    } else {
        scores['Apakah Anda sering merasa cemas atau depresi?'] = { answer: 'Jarang', points: 0 };
    }

    if (data.stress_worsen === 'yes') {
        score += 2;
        scores['Apakah gejala lambung Anda memburuk saat Anda stres?'] = { answer: 'Ya', points: 2 };
    } else {
        scores['Apakah gejala lambung Anda memburuk saat Anda stres?'] = { answer: data.stress_worsen === 'no' ? 'Tidak' : 'Tidak yakin', points: 0 };
    }

    // Cap the score at 40
    score = Math.min(score, 40);

    return { totalScore: score, scores };
}

// Function to determine diagnosis conclusion based on score
function getDiagnosisConclusion(score) {
    if (score <= 13) {
        return {
            title: 'Kondisi Lambung Normal',
            text: 'Berdasarkan jawaban Anda, kondisi lambung Anda tampaknya normal. Tetap pertahankan pola hidup sehat, konsumsi makanan bergizi, dan hindari kebiasaan yang dapat memengaruhi kesehatan lambung seperti merokok atau konsumsi alkohol berlebihan.'
        };
    } else if (score <= 26) {
        return {
            title: 'Kondisi Lambung Perlu Diperhatikan',
            text: 'Berdasarkan jawaban Anda, Anda memiliki risiko sedang untuk mengalami masalah kesehatan di lambung. Perhatikan pola makan, hindari makanan pedas atau asam berlebihan, dan pertimbangkan untuk berkonsultasi dengan dokter jika Anda mengalami gejala seperti nyeri perut atau mual.'
        };
    } else {
        return {
            title: 'Kondisi Lambung Kronis',
            text: 'Berdasarkan jawaban Anda, Anda memiliki risiko tinggi terhadap penyakit kronis lambung. Gejala ini dapat dipicu oleh faktor seperti pola makan tidak sehat, stres, atau kebiasaan merokok/alkohol. Segera konsultasikan dengan dokter untuk pemeriksaan lebih lanjut dan penanganan yang tepat.'
        };
    }
}

// Function to update the health indicator marker
function updateMarker(score) {
    const marker = document.getElementById('marker');
    // Ensure score is between 0 and 40
    const clampedScore = Math.max(0, Math.min(40, score));
    marker.textContent = clampedScore; // Update marker text

    // Calculate marker position (0% to 100% of bar width)
    const percentage = (clampedScore / 40) * 100;
    marker.style.left = `calc(${percentage}% - 15px)`; // Adjust for marker width
}

// Function to display the result
function displayResult() {
    // Retrieve saved form data
    const savedData = localStorage.getItem('diagnosisData');
    if (!savedData) {
        alert('Tidak ada data yang ditemukan. Silakan mulai diagnosa baru.');
        window.location.href = 'diagnosa.html';
        return;
    }

    const data = JSON.parse(savedData);

    // Calculate the total score and get detailed scores
    const { totalScore, scores } = calculateScore(data);

    // Update the health indicator
    updateMarker(totalScore);

    // Update the diagnosis conclusion
    const diagnosis = getDiagnosisConclusion(totalScore);
    document.getElementById('diagnosis-title').textContent = diagnosis.title;
    document.getElementById('conclusion-text').textContent = diagnosis.text;

    // Populate the health details list with questions, answers, and scores
    const healthDetailsList = document.getElementById('health-details-list');
    healthDetailsList.innerHTML = ''; // Clear existing content
    for (const [question, { answer, points }] of Object.entries(scores)) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="question">${question}</div>
            <div class="answer-details">
                <span class="answer">${answer}</span>
                <span class="score"> ${points} poin</span>
            </div>
        `;
        healthDetailsList.appendChild(li);
    }

    // Clear localStorage after displaying result
    localStorage.removeItem('diagnosisData');
}

// Form Handling Functions (unchanged)
function selectOption(button, field, value) {
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    document.getElementById(field).value = value;
}

function updateProgressBar(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s, index) => {
        if (index + 1 <= step) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}

function saveFormData(event, nextPage) {
    event.preventDefault();
    const form = document.getElementById('diagnosis-form');
    const formData = new FormData(form);
    let data = JSON.parse(localStorage.getItem('diagnosisData')) || {};

    // Update data with current form values
    for (let [key, value] of formData.entries()) {
        if (key === 'chronic_disease') {
            data[key] = data[key] || [];
            if (!data[key].includes(value)) {
                data[key].push(value);
            }
        } else {
            data[key] = value;
        }
    }

    localStorage.setItem('diagnosisData', JSON.stringify(data));
    window.location.href = nextPage;
}

function loadFormData() {
    const data = JSON.parse(localStorage.getItem('diagnosisData')) || {};

    // Pre-fill option buttons
    document.querySelectorAll('.option-btn').forEach(button => {
        const field = button.getAttribute('data-field');
        const value = button.getAttribute('data-value');
        if (data[field] === value) {
            button.classList.add('selected');
            document.getElementById(field).value = value;
        }
    });

    // Pre-fill select elements
    document.querySelectorAll('select').forEach(select => {
        if (data[select.name]) {
            select.value = data[select.name];
        }
    });

    // Pre-fill number inputs
    document.querySelectorAll('input[type="number"]').forEach(input => {
        if (data[input.name]) {
            input.value = data[input.name];
        }
    });

    // Pre-fill checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (data['chronic_disease'] && data['chronic_disease'].includes(checkbox.value)) {
            checkbox.checked = true;
        }
    });
}