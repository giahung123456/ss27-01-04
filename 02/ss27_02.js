let arr = []
let choice
let menu = `
        MENU
    1.Nhập danh sách sinh viên.
    2.Hiển thị danh sách sinh viên.
    3.Tìm sinh viên theo tên.
    4.Xóa sinh viên khỏi danh sách.
    (trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên)
    5.Thoát.
    Nhập lựa chọn của bạn:
`
while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            nhapChuoi()
            break
        case 2:
            inChuoi()
            break
        case 3:
            if (search()) {
                console.log(`có phần tử đó`)
            } else {
                console.log(`không tìm thấy phần tử đó`)
            }
            break
        case 4:
            xoaPhanTu()
            break
        case 5:

            break
        default:

            break
    }
}
function nhapChuoi() {
    arr = []
    let n = +prompt(`nhập số lượng phần tử`)
    for (let i = 0; i < n; i++) {
        let input = prompt(`nhập chuỗi thứ ${i + 1}`)
        arr.push(input)
    }
}
function inChuoi() {
    let print = arr.forEach(function (el) {
        console.log(el)
    })
   
}
function search() {
    let stringSearch = prompt(`nhập chuỗi cần tìm`)
    let check = arr.some(function (el) {
        return stringSearch === el
    })
    return check
}
function xoaPhanTu() {
    let stringXoa = prompt(`Nhập phần tử muốn xóa:`)
    let indexXoa = arr.indexOf(stringXoa)
    arr.splice(indexXoa, 1)
  
}
