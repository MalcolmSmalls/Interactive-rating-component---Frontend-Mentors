// document.querySelectorAll('.rating').addEventListener('click',active)

// function active(){
//     document.querySelector('.rating').classList.toggle('activated')
//     console.log('hey')
// }

let value = 0

document.getElementById('oneStar').onclick = oneStar

function oneStar(){
    document.querySelector('.oneStar').classList.toggle('activated')
    value = document.querySelector('.oneStar').value
}