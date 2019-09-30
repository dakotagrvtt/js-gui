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

//calculate average if input is valid
const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#grade1').checkValidity() && document.querySelector('#grade2').checkValidity() && document.querySelector('#grade3').checkValidity()) {
    const a = Number(document.querySelector('#grade1').value)
    const b = Number(document.querySelector('#grade2').value)
    const c = Number(document.querySelector('#grade3').value)
    const ans = `Your average grade is ${average(a, b, c).toFixed(2)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'grade1') ||
      (event.target && event.target.id === 'grade2') ||
      (event.target && event.target.id === 'grade3')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'calculate') { updateWithAdd(event) }
})
