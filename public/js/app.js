const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const firstMessage = document.querySelector('#first-message')
const secondMessage = document.querySelector('#second-message')

firstMessage.textContent = ''
secondMessage.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    firstMessage.textContent = 'Loading...'
    secondMessage.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error){
                firstMessage.textContent = data.error
            } else{
                firstMessage.textContent = data.address
                secondMessage.textContent = data.forecast
            }
        })
    })
})

