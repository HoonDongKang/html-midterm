saveGrade = () => {
  const studentNumber = document.getElementById('studentNum')
  const studentName = document.getElementById('studentName')
  const major = document.getElementById('major')
  const subject = document.getElementById('subject')

  if (!studentNumber.value) {
    alert('학번을 입력하세요!')
  } else {
    if (!studentName.value) {
      alert('이름을 입력하세요!')
    } else {
      if (!major.value || major.value < 0 || major.value > 100) {
        alert(`전공 점수를 입력하세요! 
전공 점수는 0이상 100이하여야 합니다.`)
      } else {
        if (!subject.value || subject.value < 0 || subject.value > 100) {
          alert(`교양 점수를 입력하세요! 
교양 점수는 0이상 100이하여야 합니다.`)
        } else {
          const stringJson = JSON.stringify({
            number: studentNumber.value,
            name: studentName.value,
            major: major.value,
            subject: subject.value,
          })

          localStorage.setItem(studentNumber.value, stringJson)

          alert(`학번 : ${studentNumber.value}
이름: ${studentName.value}
전공 점수 : ${major.value}
교양 점수: ${subject.value}
저장 완료 되었습니다.`)

          studentNumber.value = null
          studentName.value = null
          major.value = null
          subject.value = null
        }
      }
    }
  }
}

menuClick = (event) => {
  const toggles = document.querySelectorAll('.toggle')
  const saveMenu = document.getElementById('saveMenu')
  const listMenu = document.getElementById('listMenu')
  const controlMenu = document.getElementById('controlMenu')
  const initializeMenu = document.getElementById('initializeMenu')
  const firstGraphMenu = document.getElementById('firstGraphMenu')
  const secondGraphMenu = document.getElementById('secondGraphMenu')

  toggles.forEach((toggle) => {
    toggle.style.display = 'none'
  })
  switch (event.target.id) {
    case 'save':
      saveMenu.style.display = 'block'
      break
    case 'list':
      listMenu.style.display = 'block'
      break
    case 'control':
      controlMenu.style.display = 'block'
      break
    case 'init':
      initializeMenu.style.display = 'block'
      break
    case 'g1':
      firstGraphMenu.style.display = 'block'
      break
    case 'g2':
      secondGraphMenu.style.display = 'block'
      break
  }
}

const menuBtns = document.querySelectorAll('.menuBtn')
menuBtns.forEach((btn) => {
  btn.addEventListener('click', menuClick)
})

getList = () => {
  const value = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    value.push(JSON.parse(localStorage.getItem(key)))
  }
}

init = () => {
  const initialForm = document.getElementById('initializeMenu')
  const dummy = [
    {
      number: '2017H1102',
      name: '강동훈',
      major: 100,
      subject: 100,
    },
    {
      number: '2017H1311',
      name: '멍청이',
      major: 0,
      subject: 0,
    },
    {
      number: '2018H1223',
      name: '김아무개',
      major: 50,
      subject: 50,
    },
    {
      number: '2023H1102',
      name: '신입생',
      major: 90,
      subject: 100,
    },
  ]

  localStorage.clear()
  for (let dummys of dummy) {
    localStorage.setItem(dummys.number, JSON.stringify(dummys))
  }
}
