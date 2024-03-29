const form = document.querySelector('form')
const tasks = document.querySelector('ul')
const progress = document.querySelector('.progress')
const WORK_TIME = 2000

function startTimer(e) {
  e.preventDefault()
  const input = e.target.querySelector('input')
  input.disabled = true

  // память браузера localStorage
  // value - text from input, key - we must create it by yourself
  const key = Date.now()
  localStorage.setItem(key, input.value)


  progress.style.width = '100vw'
  progress.style.transitionDuration = WORK_TIME + 'ms'


  setTimeout(function (){

    input.disabled = false
    input.focus()


    progress.style.transitionDuration = ''
    progress.style.width = ''

    const listItem = document.createElement('li')
    listItem.innerText = input.value
    tasks.appendChild(listItem)
    input.value = ''

  }, WORK_TIME)
}

function loadHistory() {
  const historySize = localStorage.length

  if (historySize > 0) {
    for (let i = 0; i < historySize; i++) {
      const key = localStorage.key(i)
      const taskName = localStorage.getItem(key)

      const listItem = document.createElement('li')
      listItem.innerText = taskName
      tasks.appendChild(listItem)
    }
  }
}
form.onsubmit = startTimer
loadHistory()
