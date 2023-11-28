
document.addEventListener('DOMContentLoaded', function() {
    let btnClick = document.getElementById('btn')
    let emailInput = document.getElementById('email')
    let success = document.getElementById('success')
    let container = document.getElementById('container')
    let span = document.getElementById('span')
    let popUp = document.getElementById('pop-up')
    let btnDismiss = document.getElementById('btn-dismiss')
    
    success.style.display = 'none'
    span.style.display = 'none'
    popUp.style.fontWeight = '700'
    let formInput = document.getElementById('formInput')
    formInput.addEventListener('submit', function (event) {
        event.preventDefault()

        if (!isValidEmail(emailInput.value)) {
            span.style.display = 'block'
        
        } else {
            success.style.display = 'block'
            container.style.display = 'none'
            popUp.innerHTML = emailInput.value
            console.log(emailInput.value)
        }
    })

    btnDismiss.addEventListener('click', reloadPage)
    function reloadPage() {
        location.reload()
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        return emailRegex.test(email)
    }

})
