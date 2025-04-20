const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const container = document.querySelector('.box-slider-container');

    let scrollAmount = 0;
    const scrollStep = 300;

    nextBtn.addEventListener('click', function() {
        scrollAmount += scrollStep;
        container.style.transform = `translateX(-${scrollAmount}px)`;
        checkBtns();
    });

    prevBtn.addEventListener('click', function() {
        scrollAmount -= scrollStep;
        container.style.transform = `translateX(-${scrollAmount}px)`;
        checkBtns();
    });

    function checkBtns() {
        // Disable or enable buttons based on scroll amount
        const totalWidth = container.scrollWidth;
        const visibleWidth = container.clientWidth;

        if (scrollAmount <= 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (scrollAmount >= totalWidth - visibleWidth) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Check button status initially
    checkBtns();
});



document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000ms)
    
    // Initial slide display
    showSlide(slideIndex);
});






document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var responseMessage = document.getElementById('responseMessage');

    if (name === '' || email === '' || phone === '' || message === '') {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
        return;
    }

    // Here you can add code to submit the form data to the server (e.g., using fetch or AJAX)

    responseMessage.textContent = 'Thank you for your message. We will get back to you soon!';
    responseMessage.style.color = 'green';

    // Clear the form
    document.getElementById('contactForm').reset();
});


