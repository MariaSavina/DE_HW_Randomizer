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

document.querySelector('.generButton').onclick=(event)=>{
    console.log(event)
    a++

    let minInp=validNumber(+document.querySelector('.minInp').value)
    let maxInp=validNumber(+document.querySelector('.maxInp').value)

    let lenghtOfLimit=getlenghtOfLimit(minInp,maxInp)
   
    document.querySelector('.minInp').value=minInp
    document.querySelector('.maxInp').value=maxInp

    document.querySelector('.minInp').disabled = true
    document.querySelector('.maxInp').disabled = true

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
    document.querySelector('.result').innerHTML=arrUsedRandNum[randomNum]}
    else{
        document.querySelector('.result').innerHTML="elements are over"
        document.querySelector('.generButton').disabled = true
    }

    arrUsedRandNum.splice(randomNum,1)
}

document.querySelector('.resetButton').onclick = ()=>{
    location.reload(); 
}