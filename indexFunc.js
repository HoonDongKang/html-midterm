// account tag
// const userName = window.location.search.replace("?name=", "");
const userName = localStorage.name
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

getAlert = () => {
    const alertSpan = document.getElementById('alertValue')
    const alertValue = alert('Alert 버튼을 누루셨습니다.')
    alertSpan.innerHTML = alertValue
}
getConfirm = () => {
    const confirmSpan = document.getElementById('confirmValue')
    const confirmValue = confirm('Confirm 버튼을 누루셨습니다.')
    confirmSpan.innerHTML = confirmValue
}
getPrompt = () => {
    const promptSpan = document.getElementById('promptValue')
    const promptValue = prompt('Prompt 버튼을 누루셨습니다.')
    promptSpan.innerHTML = promptValue
}
