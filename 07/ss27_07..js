let arr=[1,2,4,5]
let soDau=arr[0]
let soCuoi=arr[arr.length-1]
let sumDayDu=((soCuoi*(soCuoi+1))/2)-((soDau*(soDau-1))/2)
let suHienTai=arr.reduce(function(acc,el){
    acc+=el
    return acc
},0)
console.log(sumDayDu-suHienTai)