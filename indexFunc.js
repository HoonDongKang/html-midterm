// account tag
const userName = window.location.search.replace('?name=', '')
const nameTag = document.getElementById('userTag')
const decodedName = decodeURI(decodeURIComponent(userName))
nameTag.innerHTML = `<span style="color:red; font-weight:bold; font-size:24px">${decodedName}</span> 님 어서오세요 :)`

//logo a tag
logoHref = () => {
    const logoTag = document.getElementById('logoTag')
    logoTag.href = `./home.html?name=${userName}`
}

aboutMeHref = () => {
    const aboutMeBtn = document.getElementById('AboutMebtn')
    aboutMeBtn.href = `./home.html?name=${userName}`
}

htmlHref = () => {
    const htmlBtn = document.getElementById('HTMLbtn')
    htmlBtn.href = `./html.html?name=${userName}`
}

cssHref = () => {
    const cssBtn = document.getElementById('CSSbtn')
    cssBtn.href = `./css.html?name=${userName}`
}

jsHref = () => {
    const jsBtn = document.getElementById('JavaScriptbtn')
    jsBtn.href = `./js.html?name=${userName}`
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
