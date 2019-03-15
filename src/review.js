function bintangAngka(angka){
    var bintang = ''
    for(var i = 0 ; i < angka; i++){ // ini untuk baris
        for(var j = 1 ; j <= i+1; j++){ // ini mengeprint angka
         bintang += j
        }
        if(i < angka-1){
        bintang += '\n'
        }
    }
    return bintang
    
}

console.log(bintangAngka(5))

function array(newArr){
    if(newArr[newArr.length-1] > 10){
        return newArr[newArr.length-1]
    } else {
        return newArr[0]
    }
}

console.log(array([3,4,2,5]))
console.log(array([3,4,5,21]))

function sumArr(param) {
    var x = []
    
    
    for(var i = 0; i < param.length; i++){
       var y = 0
        for(var j = 0; j < param[i].length; j++){
          y += param[i][j]
          if(param[i][j] < 0){
              y = 0
              break
          }
        }
        if(y > 0){
        x.push(y)
        }
    }
    return x   
}
console.log(sumArr([
    [-11,4,7,9],
    [2,3,9],
    [2,3,-9]
]))