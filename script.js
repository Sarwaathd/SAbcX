// Select elements
const welcomeBtn = document.getElementById('welcomeBtn');
const publishBtn = document.getElementById('publishBtn');
const backToAboutBtn = document.getElementById('backToAboutBtn');
const aboutPage = document.getElementById('aboutPage');
const contentPage = document.getElementById('contentPage');

// Navigation logic
welcomeBtn.addEventListener('click', () => {
    aboutPage.style.transform = 'translateY(0)';
});

publishBtn.addEventListener('click', () => {
    contentPage.style.transform = 'translateY(0)';
});

backToAboutBtn.addEventListener('click', () => {
    contentPage.style.transform = 'translateY(100%)';
});