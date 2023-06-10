const cookies = document.cookie.split(`; `).map((element) => element.split('='))
for (let i = 0; i < cookies.length; i++) {
  if (cookies[i][0] === 'accName') userName = cookies[i][1]
}
const nameTag = document.getElementById('userTag')
const decodedName = decodeURI(decodeURIComponent(userName))
nameTag.innerHTML = `<span style="color:red; font-weight:bold; font-size:24px">${decodedName}</span> 님 어서오세요 :)`

const containerList = document.querySelectorAll('.container')
const links = document.querySelectorAll('.floating')
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
