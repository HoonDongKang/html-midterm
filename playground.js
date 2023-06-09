saveGrade = () => {
  const studentNumber = document.getElementById('studentNum').value
  const studentName = document.getElementById('studentName').value
  const major = document.getElementById('major').value
  const subject = document.getElementById('subject').value

  if (!studentNumber) {
    alert('학번을 입력하세요!')
  } else {
    if (!studentName) {
      alert('이름을 입력하세요!')
    } else {
      if (!major) {
        alert('전공 성적을 입력하세요!')
      } else {
        if (!subject) {
          alert('교양 성적을 입력하세요!')
        }
      }
    }
  }
  const stringJson = JSON.stringify({
    name: studentName,
    major: major,
    subject: subject,
  })

  localStorage.setItem(studentNumber, stringJson)
}

menuClick = (e) => {
  const saveMenu = document.getElementById('saveMenu')
  const listMenu = document.getElementById('listMenu')
  const controlMenu = document.getElementById('controlMenu')
  const initializeMenu = document.getElementById('initializeMenu')
  const firstGraphMenu = document.getElementById('firstGraphMenu')
  const saveMsecondGraphMenuenu = document.getElementById('secondGraphMenu')

  const clickTarget = e.target.id
  console.log(clickTarget)
}
