let arr = []
let choice
let n
let menu = `
        MENU
    1.Cộng hai số.
    2.Trừ hai số.
    3.Nhân hai số.
    4.Chia hai số.
    5.Thoát.
`
while (choice !== 5) {
    choice = +prompt(menu)
    
    switch (choice) {
        case 1:
            select()
            console.log(TINHTONG())
            break
        case 2:
            select()
            console.log(TINHHIEU())
            break
        case 3:
            select()
            console.log(TINHNHAN())
            break
        case 4:
            select()
            console.log(TINHCHIA())
            break
        case 5:

            break
        default:

            break
    }
}
function select() {
    n = +prompt(`nhập số lượng phần tử`)
    arr=[]
    for (let i = 0; i < n; i++) {
        let input = +prompt(`nhập phần tử thứ ${i + 1}`)
        arr.push(input)
    }
    return arr
}
function TINHTONG(){
    let tong = arr.reduce(function (acc, el) {
    acc += el
    return acc
}, 0)
return tong
}
function TINHHIEU(){
    let tru = arr.reduce(function (acc, el) {
    acc -= el
    return acc
},)
return tru
}
function TINHNHAN(){
    let nhan = arr.reduce(function (acc, el) {
    acc *= el
    return acc
},1)
return nhan
}
function TINHCHIA(){
    let chia = arr.reduce(function (acc, el) {
    acc /= el
    return acc
},)
return chia
}
