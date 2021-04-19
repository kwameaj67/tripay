const menuButton  = document.querySelector('.menu')
const navList = document.querySelector('.nav_list')

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})