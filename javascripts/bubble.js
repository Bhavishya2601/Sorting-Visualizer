bubble= async ()=>{
    let ele = document.querySelectorAll('.item-bar')

    for (let i=0; i<ele.length-1; i++){
        for (let j=0; j<ele.length-i-1; j++){
            ele[j].style.background = 'blue'
            ele[j+1].style.background = 'blue'
            
            if (parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await wait(delay)
                swap(ele[j+1], ele[j]);
            }
            ele[j].style.background = 'cyan'
            ele[j+1].style.background = 'cyan'
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green'
}

document.querySelector('.bubbleSort').addEventListener('click', async()=>{
    disableSortingBtn()
    disableSizeSlider()
    disableNewArray()
    await bubble();
    enableSortingBtn()
    enableSizeSlider()
    enableNewArray()
})