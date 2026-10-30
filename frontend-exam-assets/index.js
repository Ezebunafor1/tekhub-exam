const ham = document.getElementById('hambuger')
const nav = document.getElementById('nav-link')
ham.addEventListener('click', function () {
    nav.classList.toggle('active')
})