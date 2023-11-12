const buttons = document.querySelectorAll('button')
const text = document.querySelector('p')


buttons.forEach((i)=> {
    i.addEventListener('click' , ()=> {
        const random = Math.ceil ( Math.random() * 10)
        console.log(random)
        text.innerHTML = random
        if (random > i.innerText) {
            setTimeout(()=> {
                alert('you lose')
            },1000)
        }else if (random < i.innerText) {
            setTimeout(()=> {
                alert('you win')
            },1000)
        }else {
            setTimeout(()=> {
                alert('draw')
            },1000)
        }
    })
})