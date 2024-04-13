document.addEventListener('DOMContentLoaded', function() {

    const customCursor = document.getElementById('custom-cursor');  // Get custom cursor div
    const cursorHighlight = document.getElementById('cursor-highlight');
    document.body.style.cursor = 'none'; // Hide the default cursor
    const pointerElements = document.querySelectorAll('button, a, svg'); // Target buttons and links as an example
    const textElements = document.querySelectorAll('h1, h2, h3, h4, li, p, span, label, input'); // Target paragraph texts

    // Update custom cursor's location based on default cursor
    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
        cursorHighlight.style.left = `${e.clientX}px`;
        cursorHighlight.style.top = `${e.clientY}px`;
    });

    // Show the custom cursor when the mouse enters the webpage
    document.addEventListener('mouseenter', function() {
        customCursor.style.display = 'block';
        cursorHighlight.style.display = 'block';
    });

    // Hide the custom cursor when the mouse leaves the webpage
    document.addEventListener('mouseleave', function() {
        customCursor.style.display = 'none';
        cursorHighlight.style.display = 'none';
    });

    // Add 'pointer' and 'text' states so custom cursor style can be dynamically modified
    pointerElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => customCursor.classList.add('pointer'));
        elem.addEventListener('mouseleave', () => customCursor.classList.remove('pointer'));
    });
    textElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => customCursor.classList.add('text'));
        elem.addEventListener('mouseleave', () => customCursor.classList.remove('text'));
    })

    // Handle navigation bar buttons:
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Play project cover videos when hovered
    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('.image');
        card.addEventListener('mouseenter', () => {
            video.play();
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });

    const themeButton = document.getElementById('theme-btn');

    themeButton.addEventListener('click', () => {
        const body = document.body;

        // Toggle the 'data-theme' attribute
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            themeButton.textContent = '🌙'; // Update button text to Dark Mode
        } else {
            body.setAttribute('data-theme', 'dark');
            themeButton.textContent = '☀️'; // Update button text to Light Mode
        }
    });

});

// Contact me form
document.querySelector("#contact-section form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message!');
    });
});