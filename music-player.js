// music-player.js

document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("Big Sean - Burn ft. Meek Mill.mp3"); // Membuat elemen audio
    const prevMusicButton = document.getElementById("prevMusic");
    const playMusicButton = document.getElementById("playMusic");
    const changeMusicButton = document.getElementById("changeMusic");
    const musicTitle = document.getElementById("musicTitle");

    let isPlaying = false;

    playMusicButton.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playMusicButton.innerHTML = '<i class="fa-solid fa-play" style="font-size: 20px; width: 20px; height: 20px;"></i>';
        } else {
            audio.play();
            playMusicButton.innerHTML = '<i class="fa-solid fa-pause" style="font-size: 20px; width: 20px; height: 20px;"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Daftar sumber musik yang dapat diubah
    const musicSources = [
        "Big Sean - Burn ft. Meek Mill.mp3",
        "Hindia - Masalah Masa Depan.mp3", // Ganti dengan nama file lain
        // Ganti dengan nama file lain
    ];

    let currentMusicIndex = 0;

    // Fungsi untuk mengganti musik ke musik sebelumnya
    function prevMusic() {
        currentMusicIndex = (currentMusicIndex - 1 + musicSources.length) % musicSources.length;
        audio.src = musicSources[currentMusicIndex];
        updateMusicTitle();
        if (isPlaying) {
            audio.play();
        }
    }

    // Fungsi untuk mengganti musik
    function changeMusic() {
        currentMusicIndex = (currentMusicIndex + 1) % musicSources.length;
        audio.src = musicSources[currentMusicIndex];
        updateMusicTitle();
        if (isPlaying) {
            audio.play();
        }
    }

    // Fungsi untuk memperbarui judul musik dengan batasan 17 karakter
    function updateMusicTitle() {
        const fullTitle = musicSources[currentMusicIndex];
        const limitedTitle = fullTitle.length > 17 ? fullTitle.slice(0, 17) + "..." : fullTitle;
        musicTitle.textContent = limitedTitle;
    }

    // Memanggil fungsi untuk mengatur judul musik awal
    updateMusicTitle();

    // Menghubungkan tombol ganti musik dengan fungsi
    prevMusicButton.addEventListener("click", prevMusic);
    changeMusicButton.addEventListener("click", changeMusic);

    // Menggunakan event 'ended' untuk melanjutkan ke musik berikutnya saat musik selesai
    audio.addEventListener("ended", function() {
        changeMusic();
    });
});