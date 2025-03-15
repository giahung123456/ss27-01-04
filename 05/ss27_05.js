let arr = []
let n
function tach() {
    let m = +prompt(`nhập số lượng phần tử`)
    for (let i = 0; i < m; i++) {
        let input = +prompt(`nhập phần tử thứ ${i + 1}`)
        arr.push(input)
    }
    // let string = arr.join(``)
    // console.log(string)
    console.log(arr)

    n = +prompt(`nhập kích thước mảng con`)
}
tach()

let arrTwice = []
let i = 0
while (i < arr.length) {
    let arrThirth = arr.slice(i, i + Math.ceil(arr.length / n))

    arrTwice.push(arrThirth)
    i = i + Math.ceil(arr.length / n)
}
console.log(arrTwice)

// let arrThirth = string.slice(i, i + Math.ceil(arr.length/n))
// let arrFourth = arrThirth.split(``)
// arrTwice.push(arrFourth)
// i=i+Math.ceil(arr.length/n)
