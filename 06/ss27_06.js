let arr = [2, 4, 6, 8]
let n = arr[1] - arr[0]

let hieeuj = arr.slice(0, -1).every(function ( el,i) {
        return  arr[i+1]-arr[i]===n
})
console.log(hieeuj)
