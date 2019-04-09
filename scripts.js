// ищем нашу форму
// document = html
const form = document.querySelector('form')
const tasks = document.querySelector('ul')
const progress = document.querySelector('.progress')
// волшебные числа, если есть рандомные переменные, то складываем их в переменные как тут
const WORK_TIME = 2000

// submit = work when we click enter, submit is event
// prevent - предотвратить дефолтное поведение элемента, потому что оно эмулирует перезагрузку страницы
// form.onsubmit = function logToConsole(e) {
//   e.preventDefault()
//   console.log('123')
// }

// e = event
// добавили дизэбл чтобы откл возможность писать задачи при прогрессе сохранения предыдущей, обязательно две части тру и фолс написать
function startTimer(e) {
  e.preventDefault()
  const input = e.target.querySelector('input')
  input.disabled = true
  progress.style.width = '100vw'
  progress.style.transitionDuration = WORK_TIME + 'ms'

  // добавили внутрь ul новый элемент li
// 2000 = 2sec
  setTimeout(function (){
    input.disabled = false
    input.focus()
    progress.style.transitionDuration = ''
    progress.style.width = ''
    const listItem = document.createElement('li')
    listItem.innerText = input.value
    tasks.appendChild(listItem)
    input.value = ''
  }, 2000)
}
form.onsubmit = startTimer
