// ===== PARTICLE SYSTEM =====
function createParticles() {
    const particleCount = 50;
    const body = document.body;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const color = i % 3 === 0 ? '#00ffff' : (i % 3 === 1 ? '#ff00ff' : '#ffff00');
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            box-shadow: 0 0 ${size * 3}px ${color};
            left: ${startX}px;
            top: ${startY}px;
            pointer-events: none;
            z-index: 3;
            animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
            opacity: 0;
        `;
        
        body.appendChild(particle);
    }
}

// Particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
        }
    }
`;
document.head.appendChild(style);

// ===== GLITCH EFFECT INTENSIFIER =====
function intensifyGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    setInterval(() => {
        glitchElements.forEach(element => {
            if (Math.random() > 0.95) {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = '';
                }, 50);
            }
        });
    }, 2000);
}

// ===== TYPING EFFECT FOR CONSOLE =====
function typeConsoleText() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;
    
    const text = '> System will be online soon_';
    let index = 0;
    
    typingElement.textContent = '';
    
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                index = 0;
                typingElement.textContent = '';
                typeInterval;
            }, 2000);
        }
    }, 100);
}

// ===== DYNAMIC STATS UPDATE =====
function updateStats() {
    const statFills = document.querySelectorAll('.stat-fill');
    const statValues = document.querySelectorAll('.stat-value');
    
    setInterval(() => {
        statFills.forEach((fill, index) => {
            const currentWidth = parseInt(fill.style.width);
            const change = Math.random() * 10 - 5; // Random change between -5 and +5
            let newWidth = Math.max(30, Math.min(100, currentWidth + change));
            
            fill.style.width = newWidth + '%';
            statValues[index].textContent = Math.round(newWidth) + '%';
        });
    }, 2000);
}

// ===== HOLOGRAPHIC LOADER INTERACTION =====
function setupLoaderInteraction() {
    const loader = document.querySelector('.holographic-loader');
    if (!loader) return;
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        loader.style.transform = `
            rotateX(${mouseY}deg) 
            rotateY(${mouseX}deg)
        `;
    });
}

// ===== BUTTON RIPPLE EFFECT =====
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.cyber-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(0, 255, 255, 0.5);
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== CYBERPUNK CURSOR TRAIL =====
function createCursorTrail() {
    const trail = [];
    const trailLength = 15;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Clear old trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
        
        // Create new trail
        trail.forEach((point, index) => {
            const trailDot = document.createElement('div');
            trailDot.className = 'cursor-trail';
            const opacity = index / trailLength;
            const size = 8 - (index / trailLength) * 6;
            
            trailDot.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: rgba(0, 255, 255, ${opacity});
                border-radius: 50%;
                pointer-events: none;
                left: ${point.x}px;
                top: ${point.y}px;
                transform: translate(-50%, -50%);
                z-index: 9999;
                box-shadow: 0 0 ${size * 2}px rgba(0, 255, 255, ${opacity});
            `;
            
            document.body.appendChild(trailDot);
        });
    });
}

// ===== STATUS DOT RANDOM CHANGES =====
function animateStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    
    const statuses = [
        { text: 'SYSTEM STATUS: INITIALIZING', color: '#00ff00' },
        { text: 'SYSTEM STATUS: COMPILING', color: '#ffff00' },
        { text: 'SYSTEM STATUS: LOADING', color: '#00ffff' },
        { text: 'SYSTEM STATUS: PROCESSING', color: '#ff00ff' }
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % statuses.length;
        const status = statuses[currentIndex];
        
        if (statusDot && statusText) {
            statusDot.style.background = status.color;
            statusDot.style.boxShadow = `0 0 20px ${status.color}`;
            statusText.textContent = status.text;
            statusText.style.color = status.color;
        }
    }, 3000);
}

// ===== RANDOM SCANLINE GLITCH =====
function randomScanlineGlitch() {
    const scanlines = document.querySelector('.scanlines');
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            scanlines.style.opacity = '0.3';
            setTimeout(() => {
                scanlines.style.opacity = '1';
            }, 100);
        }
    }, 3000);
}

// ===== DIGITAL RAIN (MATRIX STYLE) =====
function createDigitalRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
        opacity: 0.3;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0ff';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// ===== INITIALIZE ALL EFFECTS =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🔮 CYBERPUNK SYSTEM INITIALIZED', 'color: #00ffff; font-size: 20px; font-weight: bold;');
    
    // Initialize all effects
    createParticles();
    intensifyGlitch();
    typeConsoleText();
    updateStats();
    setupLoaderInteraction();
    setupButtonEffects();
    createCursorTrail();
    animateStatus();
    randomScanlineGlitch();
    createDigitalRain();
    
    // Log system info
    console.log('%c⚡ Neural Network: ONLINE', 'color: #0f0; font-weight: bold;');
    console.log('%c🌐 Quantum Processors: ACTIVE', 'color: #f0f; font-weight: bold;');
    console.log('%c🔧 Holographic Interface: LOADED', 'color: #ff0; font-weight: bold;');
});

// ===== HANDLE WINDOW RESIZE =====
window.addEventListener('resize', () => {
    // Recreate particles on resize
    document.querySelectorAll('.floating-particle').forEach(p => p.remove());
    createParticles();
});

// ===== KONAMI CODE EASTER EGG =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbowBackground 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        console.log('%c🎮 CHEAT CODE ACTIVATED!', 'color: #ff0; font-size: 30px; font-weight: bold;');
    }
});
