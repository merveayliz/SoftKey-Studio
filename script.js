const config = {
    brandName: "SoftKey Studio", 
    typingSpeed: 100, 
    lettersColors: [ 
        "#00ff88", 
        "#fff200", 
        "#ff9f43", 
        "#ff4757", 
        "#ec4899", 
        "#561cde", 
        "#00d4ff"  
    ]
};

const daktiloContainer = document.getElementById('daktilo-text');
const introScreen = document.getElementById('intro-screen');
const mainSite = document.getElementById('main-site');

let charIndex = 0;

window.onload = () => {
    typeWriter();
};

function typeWriter() {
    if (charIndex < config.brandName.length) {
        let char = config.brandName.charAt(charIndex);
        let span = document.createElement('span');
        span.textContent = char;
        span.classList.add('colored-letter');

     if (char !== ' ') {
        let colorIndex = charIndex % config.lettersColors.length;
         span.style.color = config.lettersColors[colorIndex];
        }

        daktiloContainer.appendChild(span);
        charIndex++;
        setTimeout(typeWriter, config.typingSpeed);
    } else {
       
        startLineAnimation();
    }
}


function startLineAnimation() {

    introScreen.classList.add('line-expanded');

    setTimeout(() => {
        introScreen.classList.add('logo-shrunk');
        
      
     setTimeout(() => {
          showMainSite();
        }, 800);

    }, 2000);
}


function showMainSite() {
    introScreen.classList.add('hidden');
    mainSite.classList.remove('hidden');
    document.body.classList.remove('animating');
    
  
    setTimeout(() => {
        mainSite.classList.add('fade-in');
    }, 100);

}
