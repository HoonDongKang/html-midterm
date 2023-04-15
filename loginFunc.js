getShow = () => {
  const firstDiv = document.getElementById('firstFormDiv')
  const secondDiv = document.getElementById('secondFormDiv')

  if (firstDiv.style.display === 'block') {
    firstDiv.style.display = 'none'
    secondDiv.style.display = 'block'
  } else {
    firstDiv.style.display = 'block'
    secondDiv.style.display = 'none'
  }
}

checkPw = () => {
  const checkMsg = document.getElementById('pwMsg')
  const password = document.getElementById('userPw')
  const passwordCheck = document.getElementById('userPwC')
  if (password.value === passwordCheck.value) {
    checkMsg.innerHTML = '비밀번호가 일치합니다.'
    checkMsg.style.color = 'green'
  } else {
    checkMsg.innerHTML = '비밀번호가 일치하지 않습니다.'
    checkMsg.style.color = 'red'
  }
}

submitForm = (e) => {
  const id = document.getElementById('userId')
  const email = document.getElementById('userEmail')
  const password = document.getElementById('userPw')
  const name = document.getElementById('userName')
  const number = document.getElementById('userNumber')
  const gender = document.getElementsByName('gender')
  let checkedGender
  const country = document.getElementById('country')

  const encodedName = encodeURI(encodeURIComponent(name.value))

  for (const input of gender) {
    if (input.checked) {
      checkedGender = input.value
      break
    }
  }

  alert(`안녕하세요 ${name.value}님
당신의 아이디는 ${id.value}고 비밀번호는 ${password.value}이군요.
당신은 ${checkedGender}이며 국적은 ${country.value}네요.
앞으로 당신에게 연락을 드릴 때 ${number.value} 또는 ${email.value}로 연락드릴게요.`)
  window.location = `./home.html?name=${encodedName}`
}
