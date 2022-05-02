function digital_root(n) {
  function sum_digits(n){
    let array_n = [...String(n)].map(Number)
    let sum = array_n.reduce((partialSum, a) => partialSum + a, 0)
    if ([...String(sum)].length > 1) {
      return sum_digits(sum)
    }
    else {
      console.log(sum)
      return sum
    }
  }
  return sum_digits(n)
}
