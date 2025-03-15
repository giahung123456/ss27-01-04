let arr=[]
let choice
let menu=`
        MENU
    0.Nhập danh sách số nguyên.
    1.in ra 
    2.Tính trung bình các số.
    3.Tìm số chẵn lớn nhất.
    4.Tìm số lẻ nhỏ nhất.
    5.Thoát.
    Lựa Chọn Của Bạn:
`
while(choice!==5){
    choice=+prompt(menu)
    switch(choice){
        case 0:
            nhap()
            break
        case 1:
            inra()
            break
        case 2:
            console.log(tinhTB())
            break
        case 3:
            console.log( timMaxC())
            break
        case 4:
            console.log(timMinL())
            break
        case 5:

            break
        default:

            break
    }
}
function nhap(){
    let n=+prompt(`nhập số lượng phần tử`)
            for(let i=0;i<n;i++){
                let input=+prompt(`nhập phần tử thứ ${i+1}`)
                arr.push(input)
            }
}
function inra(){
    let print=arr.forEach(function(el){
        console.log(el)
    })
}
function tinhTB(){
    let tinhTB=arr.reduce(function(acc,el){
        acc+=el
        return acc
    },0)
    return tinhTB/arr.length
}
function timMaxC(){
    let checkMax=arr.filter(function(el){
        return el%2===0
    })
    let MaxC=Math.max(...checkMax)
    return MaxC
}
function timMinL(){
    let checkMin=arr.filter(function(el){
        return el%2!==0
    })
    let MinL=Math.min(...checkMin)
    return MinL
}