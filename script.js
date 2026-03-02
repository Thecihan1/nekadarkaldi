// Hedef tarihleri ayarla
const events = [
    { id: "countdown-exam", name: "Sınav", date: "2026-03-10 09:00:00" },
    { id: "countdown-holiday", name: "Tatil", date: "2026-04-01 00:00:00" }
];

// Fonksiyon
function updateCountdown() {
    const now = new Date().getTime();

    events.forEach(event => {
        const target = new Date(event.date).getTime();
        const distance = target - now;

        let display;
        if (distance < 0) {
            display = `${event.name} başladı!`;
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60)) / 1000);

            display = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
        }

        document.getElementById(event.id).innerText = display;
    });
}

// Her saniye güncelle
setInterval(updateCountdown, 1000);
updateCountdown();
