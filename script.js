// Get the switch element
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const topBtn = document.getElementById('topBtn');

// Load theme from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        toggleSwitch.checked = true;
    }
}

// Toggle dark and light mode
toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Scroll to top button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});