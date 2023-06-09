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

  context.lineWidth = 3
  context.beginPath()
  //2
  context.moveTo(60, 400)
  context.lineTo(110, 400)
  context.lineTo(110, 435)
  context.lineTo(60, 435)
  context.lineTo(60, 465)
  context.lineTo(110, 465)
  //0
  context.moveTo(130, 400)
  context.lineTo(180, 400)
  context.lineTo(180, 465)
  context.lineTo(130, 465)
  context.lineTo(130, 400)

  //1
  context.moveTo(200, 400)
  context.lineTo(200, 470)

  //7
  context.moveTo(230, 430)
  context.lineTo(230, 400)
  context.lineTo(260, 400)
  context.lineTo(260, 480)

  //H
  context.moveTo(280, 400)
  context.lineTo(280, 480)
  context.lineTo(280, 440)
  context.lineTo(330, 440)
  context.lineTo(330, 400)
  context.lineTo(330, 480)

  //1
  context.moveTo(350, 400)
  context.lineTo(350, 470)
  context.stroke()

  //1
  context.moveTo(380, 400)
  context.lineTo(380, 470)

  //0
  context.moveTo(400, 400)
  context.lineTo(450, 400)
  context.lineTo(450, 465)
  context.lineTo(400, 465)
  context.lineTo(400, 400)
  //2
  context.moveTo(470, 400)
  context.lineTo(520, 400)
  context.lineTo(520, 435)
  context.lineTo(470, 435)
  context.lineTo(470, 465)
  context.lineTo(520, 465)
  context.stroke()
}
canvasOut = () => {
  var canvas = document.getElementById('myCanvas')
  var context = canvas.getContext('2d')

  context.clearRect(0, 0, canvas.width, canvas.height)
}

var canvas, context
function init() {
  canvas = document.getElementById('drawCanvas')
  context = canvas.getContext('2d')
  //   context.lineWidth = 2 // 선 굵기 2
  const colors = document.getElementsByClassName('drawingColor')
  const range = document.getElementById('lineRange')

  Array.from(colors).forEach((color) => {
    color.addEventListener('click', handlerColor)
  })
  if (range) {
    range.addEventListener('input', handleRange)
  }

  canvas.addEventListener('mousemove', move)
  canvas.addEventListener('mousedown', down)
  canvas.addEventListener('mouseup', up)
  canvas.addEventListener('mouseout', out)
  var startX = 0,
    startY = 0 // 드래깅동안, 처음 마우스가 눌러진 좌표
  var dragging = false

  function handlerColor(e) {
    const color = e.target.style.backgroundColor
    context.strokeStyle = color
  }

  function handleRange(e) {
    const size = e.target.value
    context.lineWidth = size
  }

  function draw(curX, curY) {
    context.beginPath()
    context.moveTo(startX, startY) // 처음 마우스를 클릭한 곳
    context.lineTo(curX, curY) // 마우스가 이동한 곳
    context.stroke()
  }
  function down(e) {
    // 마우스를 클릭한 때
    startX = e.offsetX
    startY = e.offsetY
    dragging = true
  }

  function up(e) {
    dragging = false
  }

  function move(e) {
    // 마우스를 이동한 때
    if (!dragging) return // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX,
      curY = e.offsetY
    draw(curX, curY)
    startX = curX
    startY = curY
  }

  function out(e) {
    dragging = false
  }
}
function handleSaveClick() {
  const image = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = image
  link.download = 'Canvas drawing'
  link.click()
}

function handleClearClick() {
  const canvas = document.getElementById('drawCanvas')
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, 400, 300)
}

getLocalKeys = () => {
  const keyValues = []

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key))
    keyValues.push(value)
  }

  return keyValues
}
