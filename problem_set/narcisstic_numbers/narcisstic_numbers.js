### first solution
function narcissistic(value) {
    let sum = 0
    for(let x of String(value)){
        sum = sum + x**String(value).length
    }
    return sum === value
}

###one-liner
function narcissistic(value){
    return(value === String(value).split('').map(i => i ** String(value).length).reduce((a, b) => a+b, 0))
}
