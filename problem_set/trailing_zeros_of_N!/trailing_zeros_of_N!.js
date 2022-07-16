//Notes
// n = [1,24] n/5
// n = [25,49] n/5 + 1
// n = [50, 74] n/5 + 2
// n = [75, 99] n/5 + 3
// n = [100, 124] n/5 + 4
// n = [125, 149] n/5 + 5 + 1

function zeros (n) {
    if(n==0){
        return 0
    }
    let powers_of_5= [...Array(100).keys()].map(function(x) { return 5 ** (x+1); })
    return(powers_of_5.map(function(x){ return Math.floor(n/x)}).reduce((a,b)=> a +b ))
}



