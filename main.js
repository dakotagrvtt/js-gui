const average = (x, y, z) => { return (x + y + z) / 3 }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

//check for valid input then
const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#grade1').checkValidity() && document.querySelector('#grade2').checkValidity() && document.querySelector('#grade3').checkValidity()) {
    const b = parseInt(document.querySelector('#grade1').value)
    const b = parseInt(document.querySelector('#grade2').value)
    const c = parseInt(document.querySelector('#grade3').value)
    const ans = `Your average grade is is ${average(a, b, c)}.`
    document.querySelector('#result').innerHTML = ans
  }
}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'firstNumber') ||
    (event.target && event.target.id === 'secondNumber')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})
