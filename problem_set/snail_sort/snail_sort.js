snail = function(array) {
    let snail_sorted=[]
    move = function(array, snail_sorted){
        if(array.length == 0){
            return snail_sorted
        }
        if(array.length == 1){
            return snail_sorted.concat(array[0])
        }
        snail_sorted.push(...array.shift())
        for (let x of array){
            snail_sorted.push(x.pop())
        }
        snail_sorted.push(...array.pop().reverse())
        for (let x of array.reverse()){
            snail_sorted.push(x.shift())
        }

        return(move(array.reverse(), snail_sorted))
    }

    return move(array, snail_sorted)
}
