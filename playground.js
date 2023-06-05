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

canvasDrawing = () => {
  var canvas = document.getElementById('myCanvas')
  var context = canvas.getContext('2d')

  // 텍스트 외곽선만 그리기
  context.font = 'italic 35px forte'
  context.strokeStyle = 'red'
  context.lineWidth = 2
  context.textAlign = 'left'
  context.strokeText('d159123@naver.Com', 10, 50)

  // 텍스트 채워 그리기
  context.font = '35px forte'
  context.fillStyle = 'skyblue'
  context.textAlign = 'right'
  context.fillText('강동훈(text)', 200, 330)

  //ㄱ
  context.beginPath()
  context.fillRect(10, 120, 80, 70)
  context.clearRect(10, 140, 60, 50)
  context.stroke()

  //ㅇ
  context.beginPath()
  context.arc(100, 250, 30, 0, 1.8 * Math.PI, false)
  context.lineWidth = 20 // 선 굵기 20픽셀
  context.strokeStyle = 'violet' // 선 색
  context.stroke()

  //ㅏ
  context.beginPath()
  context.lineWidth = 20
  context.moveTo(130, 100)
  context.lineTo(130, 200)
  context.lineTo(130, 150)
  context.lineTo(160, 150)
  context.stroke()

  //ㄷ
  context.beginPath()
  context.fillRect(200, 120, 80, 70)
  context.clearRect(220, 140, 60, 30)
  context.stroke()

  //ㅗ
  context.beginPath()
  context.lineWidth = 20
  context.moveTo(240, 190)
  context.lineTo(240, 230)
  context.lineTo(200, 230)
  context.lineTo(280, 230)
  context.stroke()

  //ㅇ
  context.beginPath()
  context.lineWidth = 20 // 선 굵기 20픽셀
  context.strokeStyle = '#239B56' // 선 색

  context.arc(240, 290, 30, 0.4 * Math.PI, 0.6 * Math.PI, true)

  context.stroke()

  //ㅗ
  context.beginPath()
  context.lineWidth = 20
  context.moveTo(350, 120)
  context.lineTo(350, 160)
  context.lineTo(310, 160)
  context.lineTo(390, 160)
  context.stroke()

  //ㅇ
  context.beginPath()
  context.lineWidth = 20 // 선 굵기 20픽셀
  context.strokeStyle = '#239B56' // 선 색
  context.arc(350, 200, 30, 0.4 * Math.PI, 0.6 * Math.PI, true)
  context.stroke()

  //ㅜ
  context.beginPath()
  context.lineWidth = 20
  context.moveTo(350, 260)
  context.lineTo(300, 260)
  context.lineTo(400, 260)
  context.lineTo(350, 260)
  context.lineTo(350, 300)
  context.stroke()

  //ㄴ
  context.beginPath()
  context.fillRect(300, 280, 100, 70)
  context.clearRect(320, 280, 80, 50)
  context.stroke()

  // 별
  context.lineWidth = 3
  context.beginPath()
  context.moveTo(480, 40)
  context.lineTo(440, 100)
  context.lineTo(380, 100)
  context.lineTo(440, 150)
  context.lineTo(420, 230)
  context.lineTo(480, 180)

  context.lineTo(540, 230)
  context.lineTo(520, 150)
  context.lineTo(580, 100)
  context.lineTo(520, 100)
  context.lineTo(480, 40)

  context.stroke() //윤관선 그리기
}
canvasOut = () => {
  var canvas = document.getElementById('myCanvas')
  var canvas = canvas.getContext('2d')

  canvas.clearRect(0, 0, canvas.width, canvas.height)
  canvas.beginPath()
}