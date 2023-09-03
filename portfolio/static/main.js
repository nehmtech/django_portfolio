const texts = ['Fullstack Developer', 'Data Scientist', 'Blogger', 'UI/UX Designer', 'Software Engineer'];
const typingDelay = 1000;
const newTextDelay = 150;
let textIndex = 0;
let charIndex = 0;

const typingTextElement = document.getElementById('typing');

function typeText(){
    if(charIndex < texts[textIndex].length){
        typingTextElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(typeText, newTextDelay);
    } else{
        setTimeout(deleteText, typingDelay);
    }
}

function deleteText(){
    if (charIndex > 0){
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex-1);
        charIndex --;
        setTimeout(deleteText, typingDelay);
    } else{
        textIndex= (textIndex +1)%texts.length;
        setTimeout(typeText, typingDelay);
    }
}

typeText()


// Counters

let counts = setInterval(updated);
        let upto = 0;
        function updated() {
            let count = document.getElementById("happy");
            count.innerHTML = ++upto;
            if (upto === 1000) {
                clearInterval(counts);
            }
        }
let counts2 = setInterval(updated2);
        let upto2 = 0;
        function updated2() {
            let count = document.getElementById("projects");
            count.innerHTML = ++upto2;
            if (upto2 === 5000) {
                clearInterval(counts2);
            }
        }
let counts3 = setInterval(updated3);
        let upto3 = 0;
        function updated3() {
            let count = document.getElementById("cup");
            count.innerHTML = ++upto3;
            if (upto3 === 1000) {
                clearInterval(counts3);
            }
        }

// Scroll reveal 

ScrollReveal().reveal('.item', { delay: 250 });
ScrollReveal().reveal('.item', { duration: 500 });
ScrollReveal().reveal('.item', { delay: 375, reset: true });

