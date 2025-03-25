    // Typewriter Effect for Animated Text
    const text = "Welcome to Codepen - Master Web Animations!";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("animated-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Fade-in Effect for Text
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("animated-text").style.opacity = "1";
        typeWriter();
    });