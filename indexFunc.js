// account tag
const userName = window.location.search.replace('?name=', '')
const nameTag = document.getElementById('userTag')
nameTag.innerHTML = `<span style="color:red; font-weight:bold; font-size:24px">${userName}</span> 님 어서오세요 :)`

//logo a tag
changeHref = () => {
    const logoTag = document.getElementById('logoTag')
    logoTag.href = `./index.html?name=${userName}`
}

const container = document.querySelectorAll('.container')
const links = document.querySelectorAll('li')
console.log(container)
console.log(links)
const firstTop = container[0].offsetTop
const secondTop = container[1].offsetTop
const thirdTop = container[2].offsetTop

links[0].onclick = () => {
    window.scroll({ top: firstTop - 80, behavior: 'smooth' })
}
links[1].onclick = () => {
    window.scroll({ top: secondTop - 80, behavior: 'smooth' })
}
links[2].onclick = () => {
    window.scroll({ top: thirdTop, behavior: 'smooth' })
}
