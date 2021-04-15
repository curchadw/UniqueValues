let array1 = [1,2,3,4,5,6,7]
let array2 = [1,2,5,8,9,10]

const uniqVals = (a,b)=>{
  

  for (let i = a.length - 1; i >= 0; i--){
    for (let j = 0; j < b.length; j++){
      if (a[i] === b[j]){
        a.splice(i,1)
        b.splice(j,1)
      }}
  }

return a.concat(b);

}

console.log(uniqVals(array1,array2))