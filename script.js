// DURUM YÖNETİMİ VE AYARLAR
const config = {
    brandName: "SoftKey Studio", // Marka ismin
    typingSpeed: 100, // Harf hızı (ms)
    lettersColors: [ // Gökkuşağı renk paletin
        "#00ff88", // Yeşil
        "#fff200", // Sarı
        "#ff9f43", // Turuncu
        "#ff4757", // Kırmızı
        "#ec4899", // Pembe
        "#561cde", // Mor
        "#00d4ff"  // Mavi
    ]
};

const daktiloContainer = document.getElementById('daktilo-text');
const introScreen = document.getElementById('intro-screen');
const mainSite = document.getElementById('main-site');

let charIndex = 0;

// BAŞLATMA
window.onload = () => {
    // Sayfa yüklendiğinde daktilo animasyonunu başlat
    typeWriter();
};

// 1. DAKTİLO EFEKTİ VE RENKLENDİRME
function typeWriter() {
    if (charIndex < config.brandName.length) {
        let char = config.brandName.charAt(charIndex);
        let span = document.createElement('span');
        span.textContent = char;
        span.classList.add('colored-letter');

        // Boşluklar hariç her harfe sıradaki rengi ata
        if (char !== ' ') {
            let colorIndex = charIndex % config.lettersColors.length;
            span.style.color = config.lettersColors[colorIndex];
        }

        daktiloContainer.appendChild(span);
        charIndex++;
        setTimeout(typeWriter, config.typingSpeed);
    } else {
        // Yazma bittiğinde çizgi animasyonunu tetikle
        startLineAnimation();
    }
}

// 2. ÇİZGİ UZAMASI VE GEÇİŞ
function startLineAnimation() {
    // Çizginin uzamasını sağlayan sınıfı ekle
    introScreen.classList.add('line-expanded');

    // 2 saniye bekle (çizgi animasyonu bitsin), sonra marka ismini küçültüp uçur
    setTimeout(() => {
        introScreen.classList.add('logo-shrunk');
        
        // Marka uçarken ana siteyi yavaşça göster
        setTimeout(() => {
            showMainSite();
        }, 800);

    }, 2000);
}

// 3. ANA SİTEYİ GÖSTER
function showMainSite() {
    // Intro ekranını gizle
    introScreen.classList.add('hidden');
    // Ana siteyi görünür yap
    mainSite.classList.remove('hidden');
    // Sayfa kaydırmayı aç
    document.body.classList.remove('animating');
    
    // Yavaşça beliren (fade-in) animasyonu
    setTimeout(() => {
        mainSite.classList.add('fade-in');
    }, 100);
}