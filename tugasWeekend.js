// TUGAS 1

function ABbCcc (param) {
    var x = ''
        for(var i = 0; i < param.length; i++){
            for(var j = i; j <= i; j++){
                x += param[i].toUpperCase()
            } for (var k = 1 ; k <= i; k++) {
                x += param[i]
            } if(param.length-1 > i) {
                x += '-'
            }
        }
    return x
}
console.log(ABbCcc('abcd'))

// TUGAS FILTER

function duplikatFilter (arr,func) {
    var newArr =[]
        for (var i = 0; i < arr.length ; i++){
            if(func(arr[i])){
                newArr.push(arr[i])
            }
        }
    return newArr
}
var arr = [4,3,2,1,5]
console.log(duplikatFilter(arr, function(val) {return val !==2 } ))

// TUGAS SORT

function sortDup(angka,func) {
    for (var i = 0 ; i < angka.length ; i++){
        for(var j = (i + 1); j < angka.length ; j++){
            if(func(angka[i], angka[j])) {
                if(angka[i] > angka[j]) {
                    var temp = angka[i];
                    angka[i] = angka[j];
                    angka[j] = temp
                    }
                }
            }
        }
    return angka
}

var angka = [1,4,5,2,34,4,5,1,3,11]
console.log(sortDup(angka,function(a,b) {return a-b}))