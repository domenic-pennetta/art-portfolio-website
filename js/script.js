const toggleButton = document.getElementsByClassName('nav-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})