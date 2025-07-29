// Form Submission Animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    submitBtn.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.style.backgroundColor = '#6c63ff';
        form.reset();
    }, 2000);
});

// Floating Animation for Contact Card
const contactCard = document.querySelector('.contact-card');
if (contactCard) {
    let floatDirection = 1;
    setInterval(() => {
        const currentY = parseFloat(contactCard.style.transform?.replace('translateY(', '') || '0');
        contactCard.style.transform = `translateY(${currentY + floatDirection * 0.5}px)`;
        if (Math.abs(currentY) > 5) floatDirection *= -1;
    }, 100);
}