selection = async ()=>{
    let ele = document.querySelectorAll(".item-bar")

    for (let i=0; i<ele.length; i++){
        let index = i;
        ele[i].style.background = 'blue'
        for (let j=i; j<ele.length; j++){
            ele[j].style.background = 'red'
            
            await wait(delay)
            if (parseInt(ele[j].style.height) < parseInt(ele[index].style.height)){
                if (index !== i) ele[index].style.background = 'cyan';
                index = j
            } else {
                ele[j].style.background = 'cyan'
            }
        }
        await wait(delay)
        swap(ele[index], ele[i])
        ele[index].style.background = 'cyan'
        ele[i].style.background = 'green'
    }
}

document.querySelector('.selectionSort').addEventListener('click', async ()=>{
    disableSortingBtn()
    disableSizeSlider()
    disableNewArray()
    await selection();
    enableSortingBtn()
    enableSizeSlider()
    enableNewArray()
})