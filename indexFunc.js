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

ifElse = (value) => {
  console.log(value)
  let result = document.getElementById('ifElse')
  if (!value) {
    result.innerHTML = '값을 적어주세요.'
  } else if (value <= 10) {
    result.innerHTML = '값이 10이상입니다.'
  } else if (value <= 100) {
    result.innerHTML = '값이 10이상이고 100이하입니다.'
  } else {
    result.innerHTML = '값이 100보다 큽니다.'
  }
}
swtichCase = (value) => {
  let result = document.getElementById('switch')

  switch (value) {
    case '사과':
      result.innerHTML = 200
      break
    case '포도':
      result.innerHTML = 300
      break
    case '체리':
      result.innerHTML = 400
      break
    default:
      result.innerHTML = '사과, 포도, 체리 중 하나를 적어주세요'
  }
}

forCase = (value) => {
  let result = document.getElementById('forResult')
  result.innerHTML = ''
  let forArr = []
  if (value > 10) {
    result.innerHTML = '10 이하의 수를 적으세요.'
  } else {
    for (let i = 0; i < Number(value); i++) {
      result.innerHTML += i + '  '
    }
  }
}

whileCase = (value) => {
  let result = document.getElementById('whileResult')
  result.innerHTML = ''
  let i = Number(value)
  if (value > 10) {
    result.innerHTML = '10 이하의 수를 적으세요.'
  } else {
    while (i > 0) {
      result.innerHTML += i + '  '
      i--
    }
  }
}
dowhileCase = (value) => {
  let result = document.getElementById('dowhileResult')
  result.innerHTML = ''
  let i = Number(value)
  if (value > 10) {
    result.innerHTML = '10 이하의 수를 적으세요.'
  } else {
    do {
      result.innerHTML += i + ' '
      i--
    } while (i > 0)
  }
}
