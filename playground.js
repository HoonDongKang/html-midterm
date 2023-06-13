getLocalKeys = () => {
  const keyValues = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key))
    keyValues.push(value)
  }

  return keyValues
}

saveGrade = () => {
  const studentNumber = document.getElementById('studentNum')
  const studentName = document.getElementById('studentName')
  const major = document.getElementById('major')
  const subject = document.getElementById('subject')
  const totalGrade = Number(major.value) + Number(subject.value)
  const average = ((Number(major.value) + Number(subject.value)) / 2).toFixed(2)

  const keyValues = getLocalKeys()
  if (keyValues.find((key) => key.number == studentNumber.value))
    alert('같은 학번이 이미 등록되어있습니다.')
  else {
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
      major: 30,
      subject: 20,
      totalGrade: 50,
      average: (25).toFixed(2),
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
      major: 70,
      subject: 80,
      totalGrade: 150,
      average: (75).toFixed(2),
    },
  ]
  if (
    confirm(`초기화를 하시면 모든 데이터가 삭제되고 초기값이 저장됩니다.
초기화를 진행하시겠습니까?`)
  ) {
    localStorage.clear()
    for (let dummys of dummy) {
      localStorage.setItem(dummys.number, JSON.stringify(dummys))
    }
  }
}

checkStuNum = () => {
  const stuNum = document.getElementById('chceckStuNum')
  const checkForm = document.getElementById('checking')
  const modifyForm = document.getElementById('modifying')
  const studentNum = document.getElementById('modifyNum')
  const studentName = document.getElementById('modifyName')
  const major = document.getElementById('modifyMajor')
  const subject = document.getElementById('modifySubject')

  const keyValues = getLocalKeys()
  const data = keyValues.find((key) => key.number == stuNum.value)
  if (data) {
    checkForm.style.display = 'none'
    modifyForm.style.display = 'block'
    studentNum.value = data.number
    studentName.value = data.name
    major.value = data.major
    subject.value = data.subject
  } else {
    alert('등록된 학번이 없는뎁쇼')
  }
}

modifyData = () => {
  const checkForm = document.getElementById('checking')
  const modifyForm = document.getElementById('modifying')
  const studentNum = document.getElementById('modifyNum')
  const studentName = document.getElementById('modifyName')
  const major = document.getElementById('modifyMajor')
  const subject = document.getElementById('modifySubject')
  const totalGrade = Number(major.value) + Number(subject.value)
  const average = ((Number(major.value) + Number(subject.value)) / 2).toFixed(2)
  const stringJson = JSON.stringify({
    number: studentNum.value,
    name: studentName.value,
    major: major.value,
    subject: subject.value,
    totalGrade: totalGrade,
    average: average,
  })

  localStorage.setItem(studentNum.value, stringJson)

  alert(`학번 : ${studentNum.value}
이름: ${studentName.value}
전공 점수 : ${major.value}
교양 점수: ${subject.value}
수정 완료 되었습니다.`)

  checkForm.style.display = 'block'
  modifyForm.style.display = 'none'
}

deleteData = () => {
  const stuNum = document.getElementById('chceckStuNum')
  const studentNum = document.getElementById('modifyNum')
  const checkForm = document.getElementById('checking')
  const modifyForm = document.getElementById('modifying')
  if (confirm('삭제하시겠습니까?')) {
    localStorage.removeItem(studentNum.value)
    checkForm.style.display = 'block'
    modifyForm.style.display = 'none'
    stuNum.value = null
  }
}

function config(type) {
  const keyValues = getLocalKeys()
  const name = []
  const avg = []
  keyValues.forEach((obj) => {
    name.push(obj.name)
    avg.push(obj.average)
  })
  let config = {
    type: type,
    data: {
      labels: name,
      datasets: [
        {
          label: '평균 점수',
          data: avg,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    },
  }
  return config
}
let myChart = null
verticalGraph = () => {
  const ctx = document.getElementById('firstGraph').getContext('2d')
  const configuration = config('bar')
  const option = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  Object.assign(configuration, { options: option })
  if (myChart != null) {
    myChart.destroy()
  }
  myChart = new Chart(ctx, configuration)
}

horizonGraph = () => {
  const ctx = document.getElementById('firstGraph').getContext('2d')
  const configuration = config('bar')
  const option = {
    indexAxis: 'y',
  }

  Object.assign(configuration, { options: option })
  if (myChart != null) {
    myChart.destroy()
  }
  myChart = new Chart(ctx, configuration)
}
doughnutGraph = () => {
  const ctx = document.getElementById('firstGraph').getContext('2d')
  const configuration = config('doughnut')
  const option = {
    // cutout: 50,
    // radius: 120,
  }

  Object.assign(configuration, { options: option })
  if (myChart != null) {
    myChart.destroy()
  }
  myChart = new Chart(ctx, configuration)
}
circleGraph = () => {
  const ctx = document.getElementById('firstGraph').getContext('2d')
  const configuration = config('polarArea')
  const option = {}

  Object.assign(configuration, { options: option })
  if (myChart != null) {
    myChart.destroy()
  }
  myChart = new Chart(ctx, configuration)
}

const result = document.querySelector('#result')

function add() {
  const number = Number(event.target.innerText)
  result.value += number
}

const operate = () => {
  const operator = event.target.id
  switch (operator) {
    case 'reset':
      result.value = ''
      break
    case 'convert':
      result.value = -result.value
      break
    case 'percent':
      result.value /= 100
      break
    case 'addition':
      result.value += '+'
      break
    case 'divide':
      result.value += '/'
      break
    case 'multiply':
      result.value += '*'
      break
    case 'subtraction':
      result.value += '-'
      break
    case 'dot':
      result.value += '.'
      break
    case 'equal':
      try {
        result.value = eval(result.value)
        break
      } catch (e) {
        //예외 처리
        result.value = 'ERR'
      }
  }
}

const bmiFunction = () => {
  const height = Number(document.getElementById('labelHeight').value)
  const weight = Number(document.getElementById('labelWeight').value)
  let bmi = weight / (height / 100) ** 2 //bmi 계산법
  bmi = Math.round(bmi * 100) / 100 //bmi 수치 반올림
  let bmiClass = ''

  if (bmi > 0 && bmi < 18.5) {
    bmiClass = '저체중'
  } else if (bmi >= 18.5 && bmi < 23) {
    bmiClass = '정상'
  } else if (bmi >= 23 && bmi < 25) {
    bmiClass = '과체중'
  } else if (bmi >= 25 && bmi < 30) {
    bmiClass = '1단계비만'
  } else if (bmi >= 30 && bmi < 35) {
    bmiClass = '2단계비만'
  } else if (bmi >= 35) {
    bmiClass = '고도비만'
  } else {
    bmiclass = '정확한 수치를 입력해주세요.'
  }
  document.getElementById('LabelResult').value = bmi
  document.getElementById('LabelClass').value = bmiClass
}

const koreanNoodle = ['비빔국수', '라면', '잔치국수', '콩국수', '냉면']
const koreanMeal = ['제육볶음', '낙지 볶음', '불고기', '삼겹살', '한우']
const koreanSoup = ['김치찌개', '된장찌개', '부대찌개', '갈비탕', '순두부찌개']
const chineseNoodle = ['짜장면', '짬뽕', '볶음면', '고추잡채', '탄탄면']
const chineseMeal = ['새우볶음밥', '마파두부', '탕수육', '라조기', '난자완스']
const chineseSoup = ['계란탕', '유산슬', '누룽지탕', '마라탕', '짬뽕']
const japaneseNoodle = ['모밀', '우동', '야끼소바', '라멘', '나베야키']
const japaneseMeal = ['초밥', '알밥', '사시미', '텐동', '사케동']
const japaneseSoup = ['미소된장국', '스키야키', '나베야키', '라멘', '샤브샤브']
const westernNoodle = [
  '까르보나라',
  '투움바파스타',
  '알리오 올리오',
  '쉬림프 아라비아따',
  '로제 파스타',
]
const westernMeal = ['돈까스', '햄버거', '바베큐', '스테이크', ' 샐러드']
const westernSoup = [
  '양송이 스프',
  '옥수수 스프',
  '토마토 스프',
  '치킨누들스프',
  '비프스튜',
]

function getFood() {
  const spanFood = document.getElementById('food')

  const countryArray = document.getElementsByName('country')
  const foodTypeArray = document.getElementsByName('foodType')

  let randomNumber = Math.ceil(Math.random() * 10) % 5
  const country = []
  const foodType = []

  for (let i = 0; i < countryArray.length; i++) {
    let num = country.push(countryArray[i].checked)
  }
  for (let i = 0; i < foodTypeArray.length; i++) {
    let num = foodType.push(foodTypeArray[i].checked)
  }

  if (country[0] === true && foodType[0] === true) {
    spanFood.innerText = koreanNoodle[randomNumber]
  } else if (country[0] === true && foodType[1] === true) {
    spanFood.innerText = koreanMeal[randomNumber]
  } else if (country[0] === true && foodType[2] === true) {
    spanFood.innerText = koreanSoup[randomNumber]
  } else if (country[1] === true && foodType[0] === true) {
    spanFood.innerText = japaneseNoodle[randomNumber]
  } else if (country[1] === true && foodType[1] === true) {
    spanFood.innerText = japaneseMeal[randomNumber]
  } else if (country[1] === true && foodType[2] === true) {
    spanFood.innerText = japaneseSoup[randomNumber]
  } else if (country[2] === true && foodType[0] === true) {
    spanFood.innerText = chineseNoodle[randomNumber]
  } else if (country[2] === true && foodType[1] === true) {
    spanFood.innerText = chineseMeal[randomNumber]
  } else if (country[2] === true && foodType[2] === true) {
    spanFood.innerText = chineseSoup[randomNumber]
  } else if (country[3] === true && foodType[0] === true) {
    spanFood.innerText = westernNoodle[randomNumber]
  } else if (country[3] === true && foodType[1] === true) {
    spanFood.innerText = westernMeal[randomNumber]
  } else if (country[3] === true && foodType[2] === true) {
    spanFood.innerText = westernSoup[randomNumber]
  }
}
