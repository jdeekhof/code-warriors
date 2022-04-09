split_string.js

####first idea
function solution(str){
  let arr = []
  for (n in str){
    let x = str[n]
    try {const y = str[n+1]}
    catch (error) {const y = "_"}
    arr.concat([x,y].join(''))
  }
  return(arr)
}

####second idea

function solution(str){
 let arr = []
 if(str.length % 2){
   str = str + "_"
 }
  for (let i = 0; i < str.length ; i += 2){
    arr.push(str.slice(i,i+2))
  }
  return arr
}
