insertion= async ()=>{
    // alert('hello')
    let ele = document.querySelectorAll('.item-bar')
    
    for (let i=1; i<ele.length; i++){
        let j=i;
        await wait(delay)
        while (j>0 && parseInt(ele[j-1].style.height) > parseInt(ele[j].style.height)){
            await wait(delay)

            let temp = ele[j-1].style.height;
            ele[j-1].style.height = ele[j].style.height;
            ele[j].style.height = temp;

            j--;
        }

    }
}

document.querySelector('.insertionSort').addEventListener('click', async ()=>{
    disableSortingBtn()
    disableSizeSlider()
    disableNewArray()
    await insertion();
    enableSortingBtn()
    enableSizeSlider()
    enableNewArray()
})