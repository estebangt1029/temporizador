
const empezar = document.getElementById('empezar').addEventListener('click',()=>{
    let num=+prompt('digite el tiempo')
    temporizador(num)
})

const tiempo=document.getElementById('tiempo')

function temporizador(num){
    if(num<1){
        tiempo.textContent='finish'
        return  
        
    }else{
        tiempo.textContent=num        
        return setTimeout(temporizador,1000,num-1)
        Image.style.rotate='100deg'


    }
}
