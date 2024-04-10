document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('custom-cursor');  // Get custom cursor div
    document.body.style.cursor = 'none'; // Hide the default cursor
    const pointerElements = document.querySelectorAll('button, a, svg'); // Target buttons and links as an example
    const textElements = document.querySelectorAll('h1, h2, h3, h4, li, p, span'); // Target paragraph texts

    // Update custom cursor's location based on default cursor
    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Show the custom cursor when the mouse enters the webpage
    document.addEventListener('mouseenter', function() {
        customCursor.style.display = 'block';
    });

    // Hide the custom cursor when the mouse leaves the webpage
    document.addEventListener('mouseleave', function() {
        customCursor.style.display = 'none';
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
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior
            const targetId = e.target.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the position to scroll to
                const offsetTop = targetElement.offsetTop - 106; // Offset for nav bar
                window.scrollTo({
                    top: offsetTop, behavior: 'smooth'
                });
            }
        })
    })

    // Play project cover videos when hovered
    document.querySelectorAll('.project-card').forEach(card => {
        const video = card.querySelector('.image-cover');
        card.addEventListener('mouseenter', () => {
            video.play();
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
});