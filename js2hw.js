//Tạo 1 array, bên trong là các object chứa các property (thuộc tính) sau: name, age. Lấy thông tin là các bạn trong lớp. VD: [{name: 'Giang', age: 22},{...},...]

var array = [
    {Name:'Khoa', Age:13}, 
    {Name:'Huy', Age:17}, 
    {Name:'Hoàng', Age:17},
    {Name:'Đăng', Age:0}, 
    {Name:'Khôi', Age:16}, 
    {Name:'Lan', Age:14}, 
    {Name:'Sơn', Age:13}, 
    {Name:'Nam', Age:16},
    {Name:'Trung', Age:16},
    {Name:'Vinh', Age:0},
    {Name:'Nam Anh', Age:16},
    {Name:'Dũng', Age:0}
];

//Tính tổng số tuổi của tất cả các bạn trong lớp (lấy từ thuộc tính age bên trên) (Hint: dùng vòng lặp for). Console.log ra tổng đó

var i = 0;
var totalAge = 0;

for(i; i<=array.length-1; i++) {
    var totalAge = array[i].Age+totalAge;
    console.log(totalAge)
};

//Tạo 1 vòng lặp in ra các số chia hết cho 3 từ 1000 -> 0

var a = 1000
for(a; a>=0; a--){
    if(a%3==0){
    console.log(a)
    };
};


//Bonus:  Người dùng nhập vào số n, tạo ra n dòng số 1

// var lines = prompt('Insert lines');
// var numberOfLines = parseInt(lines); 
// for(){

// };
