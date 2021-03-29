function validNumber(value){
    if(value<0){
        return Math.floor(-1*value)
    }
    else return Math.floor(value)
}

function createRandNum(a,b){
    let min
    let max
    if(a>b){
        max=a
        min=b
    }
    else{
        max=b
        min=a
    }
    return Math.floor(Math.random() * (max - min + 1)) + min

}

function getlenghtOfLimit(a,b){
    if(a>b){
        return a-b+1
    }
    else{
        return b-a+1
    }
}

let arrUsedRandNum=[]
let a=0

document.querySelector('.game-display__button').onclick=(event)=>{
    console.log(event)
    a++

    let minInp=validNumber(+document.querySelector('.limit-min').value)
    let maxInp=validNumber(+document.querySelector('.limit-max').value)

    let lenghtOfLimit=getlenghtOfLimit(minInp,maxInp)
   
    document.querySelector('.limit-min').value=minInp
    document.querySelector('.limit-max').value=maxInp

    document.querySelector('.limit-min').disabled = true
    document.querySelector('.limit-max').disabled = true

    let k
    minInp>maxInp?k=maxInp:k=minInp

    if(a==1){    
        for(let i=0,j=k;i<lenghtOfLimit;i++,j++){
        arrUsedRandNum.push(j)
        }
    }

    console.log(arrUsedRandNum)

    let randomNum=createRandNum(0, arrUsedRandNum.length-1)
    console.log(arrUsedRandNum[randomNum])

    if(arrUsedRandNum.length>0){
        document.querySelector('.text__result').innerHTML=arrUsedRandNum[randomNum]
    }
    else{
        document.querySelector('.text__result').innerHTML="elements are over"
        document.querySelector('.game-display__button').disabled = true
    }

    arrUsedRandNum.splice(randomNum,1)
}

document.querySelector('.reset-display__elem').onclick = ()=>{
    location.reload(); 
}
