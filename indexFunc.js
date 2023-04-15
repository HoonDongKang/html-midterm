// account tag
const userName = window.location.search.replace('?name=', '')
const nameTag = document.getElementById('userTag')
const decodedName = decodeURI(decodeURIComponent(userName))
nameTag.innerHTML = `<span style="color:red; font-weight:bold; font-size:24px">${decodedName}</span> 님 어서오세요 :)`

//logo a tag
logoHref = () => {
    const logoTag = document.getElementById('logoTag')
    console.log(logoTag)
    logoTag.href = `./home.html?name=${userName}`
}

aboutMeHref = () => {
    const aboutMeBtn = document.getElementById('AboutMebtn')
    console.log(aboutMeBtn)
    aboutMeBtn.href = `./home.html?name=${userName}`
}
const containerList = document.querySelectorAll('.container')
const links = document.querySelectorAll('li')
let containerOffsetTopList = []

for (let container of containerList) {
    containerOffsetTopList.push(container.offsetTop)
}
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        window.scroll({
            top: containerOffsetTopList[i] - 200,
            behavior: 'smooth',
        })
    }
}
