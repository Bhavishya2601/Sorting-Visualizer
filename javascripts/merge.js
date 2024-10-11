merge = async (arr, low, mid, high) => {
    let n1 = mid-low+1
    let n2 = high-mid;
    let left= new Array()
    let right = new Array()

    for (let i=0; i<n1; i++){
        await wait(delay)
        arr[low+i].style.background = 'orange'
        left[i] = arr[low+i].style.height
    }

    for (let i=0; i<n2; i++){
        await wait(delay)
        arr[mid+i+1].style.background = 'yellow'
        right[i] = arr[mid+1+i].style.height
    }

    await wait(delay)
    let i=0, j=0, k=low;
    while (i < n1 && j < n2){
        await wait(delay)
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === arr.length) arr[k].style.background = 'green';
            else arr[k].style.background = 'lightgreen';
            
            arr[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === arr.length) arr[k].style.background = 'green';
            else arr[k].style.background = 'lightgreen';

            arr[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await wait(delay)
        if((n1 + n2) === arr.length) arr[k].style.background = 'green';
        else arr[k].style.background = 'lightgreen';
        
        arr[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        if((n1 + n2) === arr.length) arr[k].style.background = 'green';
        else arr[k].style.background = 'lightgreen';

        arr[k].style.height = right[j];
        j++;
        k++;
    }
}

mergeSort = async (arr, low, high) =>{
    if (low>=high) return;
    let mid = Math.floor((low + high)/2);
    await mergeSort(arr, low, mid);
    await mergeSort(arr, mid+1, high);

    await merge(arr, low, mid, high);
}



document.querySelector('.mergeSort').addEventListener('click', async ()=>{
    let arr = document.querySelectorAll(".item-bar")
    let len = parseInt(arr.length)-1
    disableSortingBtn()
    disableSizeSlider()
    disableNewArray()
    await mergeSort(arr, 0, len);
    enableSortingBtn()
    enableSizeSlider()
    enableNewArray()
})