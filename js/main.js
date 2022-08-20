// document.querySelectorAll('.rating').addEventListener('click',active)

// function active(){
//     document.querySelector('.rating').classList.toggle('activated')
//     console.log('hey')
// }

let value = 0



// document.getElementById('oneStar').onclick = oneStar
// document.getElementById('twoStars').onclick = twoStars
// document.getElementById('threeStars').onclick = threeStars
// document.getElementById('fourStars').onclick = fourStars
// document.getElementById('fiveStars').onclick = fiveStars


// let one = document.querySelector('.oneStar')
// let two = document.querySelector('.twoStars')
// let three = document.querySelector('.threeStars')
// let four = document.querySelector('.fourStars')
// let five = document.querySelector('.fiveStars')

// function oneStar(){
//     if(twoActivated === true){
//         two.classList.remove('activated')
//     }else if(threeActivated === true){
//         three.classList.remove('activated')
//     }else if(fourActivated === true ){
//         four.classList.remove('activated')
//     }else if(fiveActivated === true){
//         five.classList.remove('activated')
//     }
//     document.querySelector('.oneStar').classList.toggle('activated')
//     value = document.querySelector('.oneStar').value
// }

// function twoStars(){
//     document.querySelector('.twoStars').classList.toggle('activated')
//     value = document.querySelector('.twoStars').value
// }

// function threeStars(){
//     document.querySelector('.threeStars').classList.add('activated')
//     value = document.querySelector('.threeStars').value
// }

// function fourStars(){
//     document.querySelector('.fourStars').classList.toggle('activated')
//     value = document.querySelector('.fourStars').value
// }

// function fiveStars(){
//     document.querySelector('.fiveStars').classList.toggle('activated')
//     value = document.querySelector('.fiveStars').value
// }

const ratings = Array.from(document.querySelectorAll('.rating'))
ratings.forEach(rating => rating.addEventListener('click', activation))

function activation(e){
    document.querySelector('.error').style.display ='none'
    ratings.forEach(element => {
        if(element !== this){
            element.classList.remove('activated')
        }
    })
    this.classList.toggle('activated')
    value = this.value
    console.log(value)
}

document.querySelector('.orange').addEventListener('click', submit)

function submit(){
    if(value === 0){
        document.querySelector('.error').innerText = 'You must pick a rating'
        return
    }else{
    document.querySelector('.rated').innerText = value
    document.querySelector('#main').style.display ='none'
    document.querySelector('#thankYou').style.display ='block'
    }
}

// function removeActivation(clicked){
//     this.classList.toggle('activated')
//     console.log(this)
    // if(clicked.target.classList.contains('activated')){

    // }
    // if (e.classList !== 'activated') return
    // e.target.classList.toggle('activated')
//}

// let oneActivated = document.querySelector('.oneStar').classList.contains('activated')
// let twoActivated = document.querySelector('.twoStars').classList.contains('activated')
// let threeActivated = document.querySelector('.threeStars').classList.contains('activated')
// let fourActivated = document.querySelector('.fourStars').classList.contains('activated')
// let fiveActivated = document.querySelector('.fiveStars').classList.contains('activated')
