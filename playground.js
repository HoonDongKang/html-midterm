saveGrade = () => {
  const studentNumber = document.getElementById('studentNum')
  const studentName = document.getElementById('studentName')
  const major = document.getElementById('major')
  const subject = document.getElementById('subject')
  const totalGrade = Number(major.value) + Number(subject.value)
  const average = ((Number(major.value) + Number(subject.value)) / 2).toFixed(2)

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
            totalGrade: totalGrade,
            average: average,
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

updateRank = () => {
  const values = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key))
    Object.assign(value, { rank: 1 })
    values.push(value)
  }
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (values[i].totalGrade < values[j].totalGrade) {
        values[i].rank++
      }
    }
  }

  return values
}
listTable = (arr) => {
  const list = document.getElementById('resultList')
  let listTable = `<table id="gradeTable" >
  <tr>
  <th>학번</th>
  <th>이름</th>
  <th width=40>전공</th>
  <th width=40>교양</th>
  <th width=40>합계</th>
  <th width=40>평균</th>
  <th width=40>석차</th>
  </tr>`

  for (let value of arr) {
    listTable += `<tr>
    <td>${value.number}</td>
    <td>${value.name}</td>
    <td>${value.major}</td>
    <td>${value.subject}</td>
    <td>${value.totalGrade}</td>
    <td>${value.average}</td>
    <td>${value.rank}</td>
    </tr>
    `
  }

  list.innerHTML = listTable
}
getListByName = () => {
  const updatedList = updateRank()
  updatedList.sort((a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  })
  listTable(updatedList)
}
getListByGrade = () => {
  const updatedList = updateRank()
  updatedList.sort((a, b) => {
    return a.rank - b.rank
  })
  listTable(updatedList)
}
getListByMajor = () => {
  const updatedList = updateRank()
  updatedList.sort((a, b) => {
    return b.major - a.major
  })
  listTable(updatedList)
}
getListBySubject = () => {
  const updatedList = updateRank()
  updatedList.sort((a, b) => {
    return b.subject - a.subject
  })
  listTable(updatedList)
}

initial = () => {
  const dummy = [
    {
      number: '2017H1102',
      name: '강동훈',
      major: 100,
      subject: 100,
      totalGrade: 200,
      average: (100).toFixed(2),
    },
    {
      number: '2017H1311',
      name: '멍청이',
      major: 0,
      subject: 0,
      totalGrade: 0,
      average: (0).toFixed(2),
    },
    {
      number: '2018H1223',
      name: '김아무개',
      major: 50,
      subject: 50,
      totalGrade: 100,
      average: (50).toFixed(2),
    },
    {
      number: '2023H1102',
      name: '신입생',
      major: 90,
      subject: 100,
      totalGrade: 190,
      average: (95).toFixed(2),
    },
  ]

  localStorage.clear()
  for (let dummys of dummy) {
    localStorage.setItem(dummys.number, JSON.stringify(dummys))
  }
}
