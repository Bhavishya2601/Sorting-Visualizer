swap=(a,b)=>{
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
}

wait = (delay) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('')
        }, delay)
    })
}

enableSizeSlider=()=>{
    document.querySelector('#size').disabled = false
}

disableSizeSlider=()=>{
    document.querySelector('#size').disabled = true
}

enableSortingBtn=()=>{
    document.querySelector('.bubbleSort').disabled = false
    document.querySelector('.insertionSort').disabled = false
    document.querySelector('.mergeSort').disabled = false
    document.querySelector('.quickSort').disabled = false
    document.querySelector('.selectionSort').disabled = false
}

disableSortingBtn=()=>{
    document.querySelector('.bubbleSort').disabled = true
    document.querySelector('.insertionSort').disabled = true
    document.querySelector('.mergeSort').disabled = true
    document.querySelector('.quickSort').disabled = true
    document.querySelector('.selectionSort').disabled = true
}

disableNewArray=()=>{
    document.querySelector('.newArray').disabled = true
}

enableNewArray=()=>{
    document.querySelector('.newArray').disabled = false
}

// remove this afterwards
alert('Currently only selection sort works')

let arraySize = document.querySelector('#size')
arraySize.addEventListener('input', ()=>{
    createNewArray(parseInt(arraySize.value))
})

let delay = 260
let speed = document.querySelector('#speed')
speed.addEventListener('input', ()=>{
    delay = 320 - parseInt(speed.value)
})


createNewArray=(noOfBars = 50)=>{
    deletePrevious()

    arr = []
    for (let i=0; i<noOfBars; i++){
        arr.push(Math.floor(Math.random()*250)+1)
    }
    const bars = document.querySelector('#bars')
    for (let i=0; i<noOfBars; i++){
        let bar = document.createElement('div')
        bar.style.height = `${arr[i]*2}px`
        bar.classList.add('item-bar')
        bars.appendChild(bar)
    }
}

deletePrevious=()=>{
    document.querySelector('#bars').innerHTML = ''
}

let arr=[]
createNewArray()

let newArray = document.querySelector('.newArray')
newArray.addEventListener('click', ()=>{
    enableSortingBtn()
    enableSizeSlider()
    createNewArray(parseInt(arraySize.value))
})