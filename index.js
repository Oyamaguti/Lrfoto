let elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

let elementosReviews = document.querySelectorAll('.review')

elementosReviews.forEach(function (review) {
    review.addEventListener('click', function () {
        review.classList.toggle('ativa')
    })
})
