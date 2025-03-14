let choice;
let menu = `
        MENU TÍNH TOÁN HÌNH HỌC
    1. Tính diện tích hình tròn.
    2. Tính chu vi hình tròn.
    3. Tính diện tích hình chữ nhật.
    4. Tính chu vi hình chữ nhật.
    5. Thoát.
    Nhập lựa chọn của bạn:
`;

while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            tinhDienTichTron();
            break;
        case 2:
            tinhChuViTron();
            break;
        case 3:
            tinhDienTichChuNhat();
            break;
        case 4:
            tinhChuViChuNhat();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
}

function tinhDienTichTron() {
    let r = +prompt("Nhập bán kính hình tròn:");

        console.log(`Diện tích hình tròn là: ${(Math.PI * r * r).toFixed(2)}`);
   
}

function tinhChuViTron() {
    let r = +prompt("Nhập bán kính hình tròn:");
 
        console.log(`Chu vi hình tròn là: ${(2 * Math.PI * r).toFixed(2)}`);
    
}

function tinhDienTichChuNhat() {
    let dai = +prompt("Nhập chiều dài hình chữ nhật:");
    let rong = +prompt("Nhập chiều rộng hình chữ nhật:");
   
        console.log(`Diện tích hình chữ nhật là: ${dai * rong}`);
   
}

function tinhChuViChuNhat() {
    let dai = +prompt("Nhập chiều dài hình chữ nhật:");
    let rong = +prompt("Nhập chiều rộng hình chữ nhật:");
  
        console.log(`Chu vi hình chữ nhật là: ${2 * (dai + rong)}`);
    
}
