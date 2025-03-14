let danhSachSoNguyen = [];
let luaChon;
let menu = `
        MENU XỬ LÝ SỐ NGUYÊN
    1. Nhập danh sách số nguyên.
    2. Tính trung bình các số.
    3. Tìm số chẵn lớn nhất.
    4. Tìm số lẻ nhỏ nhất.
    5. Thoát.
    Nhập lựa chọn của bạn:
`;

while (luaChon !== 5) {
    luaChon = Number(prompt(menu));
    switch (luaChon) {
        case 1:
            nhapDanhSachSoNguyen();
            break;
        case 2:
            tinhTrungBinhCacSo();
            break;
        case 3:
            timSoChanLonNhat();
            break;
        case 4:
            timSoLeNhoNhat();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
}

function nhapDanhSachSoNguyen() {
    danhSachSoNguyen = [];
    let soLuong = Number(prompt("Nhập số lượng phần tử:"));
    for (let i = 0; i < soLuong; i++) {
        let soNguyen = Number(prompt(`Nhập số nguyên thứ ${i + 1}:`));
        danhSachSoNguyen.push(soNguyen);
    }
}

function tinhTrungBinhCacSo() {
    
    let tong = danhSachSoNguyen.reduce(function (tongSo, soHienTai) {
        return tongSo + soHienTai;
    }, 0);
    let trungBinh = tong / danhSachSoNguyen.length;
    console.log(`Giá trị trung bình là: ${trungBinh.toFixed(2)}`);
}

function timSoChanLonNhat() {
    let danhSachSoChan = danhSachSoNguyen.filter(function (so) {
        return so % 2 === 0;
    });
        let soChanLonNhat = Math.max(...danhSachSoChan);
        console.log(`Số chẵn lớn nhất là: ${soChanLonNhat}`);
    
}

function timSoLeNhoNhat() {
    let danhSachSoLe = danhSachSoNguyen.filter(function (so) {
        return so % 2 !== 0;
    });
    if (danhSachSoLe.length === 0) {
        console.log("Không có số lẻ trong danh sách.");
    } else {
        let soLeNhoNhat = Math.min(...danhSachSoLe);
        console.log(`Số lẻ nhỏ nhất là: ${soLeNhoNhat}`);
    }
}
