const container = document.querySelectorAll('.container')
const links = document.querySelectorAll('li')
const firstTop = container[0].offsetTop
const secondTop = container[1].offsetTop
const thirdTop = container[2].offsetTop

links[0].onclick = () => {
    window.scroll({ top: firstTop, behavior: 'smooth' })
}
links[1].onclick = () => {
    window.scroll({ top: secondTop, behavior: 'smooth' })
}
links[2].onclick = () => {
    window.scroll({ top: thirdTop, behavior: 'smooth' })
}

// $(function () {
//     $('.dropdown-content li').click(function () {
//         console.log(this.hash)
//         $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300)
//     })
// })
