
function chunkArray(array, size) {
    let result = []
    for (let value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length === size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

function categoryColumns(arr){
  return chunkArray(arr, Math.ceil((arr.length)/3));

}


export {chunkArray, categoryColumns }
