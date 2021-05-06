//Tạo 1 trang web để đăng ký tài khoản dùng HTML và CSS theo mẫu bên dưới. Khi người dùng nhập thông tin và nhấn nút đăng ký, console.log ra thông tin đăng ký của họ


function reg(){
        
    var mail = document.getElementById('regMail').value;
    var pw = document.getElementById('regPw').value;
    //Báo lỗi (alert) nếu như người dùng không nhập email hoặc password hoặc cả 2. VD: "Bạn chưa điền email" nếu thiếu email


    if(mail == '' && pw == ''){
        alert('please insert your email and password')
    }
    else if(mail != '' && pw == ''){
        alert('please insert password')
    }
    else if(mail == '' && pw != ''){
        alert('please insert mail')
    }
    else{console.log('E-mail: '+mail+'Password: '+pw)}
    //Báo lỗi ở bên dưới input trong các trường hợp: không nhập thông tin, nhập sai định dạng email.


    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if( !filter.test(mail)){
        document.getElementById('noteMail').style.display='block'
        document.getElementById('noteMail').innerHTML='Please insert valid email'
    }

    //Khi người dùng đăng ký, lưu lại thông tin trong 1 array là userInfo. Dùng trang đăng nhập đã làm, nếu người dùng nhập đúng thông tin như đã đăng ký thì sẽ hiện ra kết quả "Đã đăng nhập", nếu không sẽ báo alert Sai thông tin
}
