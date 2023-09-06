const imgs = document.querySelectorAll('.imgs');
const indicators = document.querySelectorAll('.indicators');

let idx = 0;

function carrossel(){
    idx++;

    if(idx > (imgs.length - 1)){
        idx = 0;
        resetTransform();
    }

    imgs[idx].style.transform = `translateX(${-idx * imgs[idx].width}px)`;

    for(let i = 1; i <= imgs.length; i++){

        document.getElementById(`ind${i}`).classList.remove('selected');
    }
    document.getElementById(`ind${idx+1}`).classList.add('selected');
};


setInterval(carrossel, 3000)

function resetTransform(){
    imgs.forEach(img=>{
        img.style.transform = '';
    })
};



const img1 = document.getElementById('img1').addEventListener('click',()=>{window.open('https://www.google.com.br', '_blank)')});
const img2 = document.getElementById('img2').addEventListener('click',()=>{window.open('https://www.instagram.com.br', '_blank')});
const img3 = document.getElementById('img3').addEventListener('click',()=>{window.open('https://www.linkedin.com.br', '_blank')});
