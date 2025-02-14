const loadingTexts = [
    "Initializing Deep Neural Thinking Wizard...",
    "Scanning your brain waves...",
    "Analyzing thought patterns...",
    "Calculating probabilities...",
    "Connecting to the cosmic consciousness...",
    "Processing mental frequencies...",
    "Decoding neural signals...",
    "Almost there..."
];

const inputScreen = document.getElementById('inputScreen');
const loadingScreen = document.getElementById('loadingScreen');
const resultScreen = document.getElementById('resultScreen');
const progressBar = document.getElementById('progressBar');
const loadingText = document.getElementById('loadingText');
const resultNumber = document.getElementById('resultNumber');
let progress = 0;
let textIndex = 0;

function startReading() {
    const number = document.getElementById('numberInput').value;
    if (number >= 1 && number <= 10) {
       
        inputScreen.classList.add('hidden');
        loadingScreen.classList.remove('hidden');
        resultScreen.classList.add('hidden');
        
       
        progress = 0;
        textIndex = 0;
        progressBar.style.width = '0%';
        
        // Start the loading animation
        const loadingInterval = setInterval(() => {
            if (progress < 100) {
                progress += 2;
                progressBar.style.width = `${progress}%`;
                
                // Update loading text periodically
                if (progress % 12 === 0) {
                    loadingText.textContent = loadingTexts[textIndex % loadingTexts.length];
                    textIndex++;
                }
            } else {
                clearInterval(loadingInterval);
                showResult(number);
            }
        }, 100);
    }
}

function showResult(number) {
    
    loadingScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    
    resultNumber.textContent = number;
}

function resetGame() {
 
    document.getElementById('numberInput').value = '';
    

    inputScreen.classList.remove('hidden');
    loadingScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
  
    progress = 0;
    textIndex = 0;
    progressBar.style.width = '0%';
    loadingText.textContent = '';
}
