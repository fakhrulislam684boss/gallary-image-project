let currentImg = document.querySelector('#currentImg')

let imgs = document.querySelectorAll('.imgs')

imgs.forEach(img =>{
    img.addEventListener('click',(e)=>{
        currentImg.src = e.target.src
    })
})
