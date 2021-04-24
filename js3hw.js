//Viết ra chương trình ở phần console in ra tính chất của các số từ 0 đến 1000.

// var a = 1000;

// for(a; a>=0; a--){
//     if(a%2==0){
//         console.log(a+': even number')
//     }
//     else{
//         console.log(a+': odd number')
//     }
// }

//Tạo 1 array gồm các số từ 1 đến 10. Hỏi người dùng muốn thêm số nào (dùng prompt). Khi người dùng nhập 1 số bất kỳ vào, hãy thêm số đó vào cuối dãy số trong array.

// var array = [1,2,3,4,5,6,7,8,9,10];

// alert(array);

// var b = prompt('you are currently having an array of numbers from one to ten, would you like to add any DIFFERENT number into this array? (yes/no)');

// if(b=='yes'){
//     var c = prompt('which number?'); 
//     var cc = parseInt(c);
//     if(cc==1 || cc==2 || cc==3 || cc==4 || cc==5 || cc==6 || cc==7 || cc==8 || cc==9 || cc==10) { 
//         // chỗ này em định cho người dùng nhập số khác các số có sẵn trong array nhưng em không biết làm thế nào để so sánh số nhập vào với từng phần từ trong array một nên em để thế này :>, hơi cồng kệnh ạ :>>
//         alert(" I SAID 'DIFFERENT NUMBER' " )
//     }
//     else{
//         array.push(cc);
//         alert('so now you are having an array with the following elements:');
//         alert(array);
//     }
// }
// else if(b=='no'){
//     alert('ok pp :)');
// }
// else{
//     alert('please answer my question PROPERLY :D');
// }

//Viết chương trình mà khi người dùng nhập vào độ dài 4 cạnh của 1 tứ giác, in ra tính chất của tứ giác đó (tứ giác, hình vuông, hình chữ nhật)

// alert('given quadrilateral ABCD')
// var d = prompt('insert length of AB');
// var e = prompt('insert length of BC');
// var f = prompt('insert length of CD');
// var g = prompt('insert length of DA');

// if(d==e && e==f && f==g && g==d){
//     alert('square (actually it can also be a rhombus as we do not know yet does it have a right angle or not, however my teacher only wants squares so f... that)')
// }
// else if(d==f && e==g){
//     alert('can only be a rectangle')
// }
// else{
//     alert('just normal quadrilateral, nothing special')
// }

//Viết một chương trình cho phép người dùng nhập vào một năm (ví dụ 1989) kiểm tra và in ra xem năm người dùng nhập vào có phải năm nhuận không. Chú ý: Để cho đơn giản, xét năm nhuận bằng một điều kiện là năm này có chia hết cho 4 hay không

// var h = prompt('insert a year and i can barely tell if it is a leap year or not');
// if(h%4==0){
//     alert('precisely, it is')
// }
// else{
//     alert('sure it is not')
// }

//Viết 1 chương trình mà người dùng nhập vào tọa độ x,y của 1 điểm bất kỳ trong hệ tọa độ, in ra điểm đó ở góc phần tư thứ mấy trong hệ tọa độ

// var x = prompt('insert x coordinate');
// var y = prompt('insert y coordinate');

// if(x==0 && y==0){
//     alert('origin')
// }
// else if(x>0 && y>0){
//     alert('Quadrant I')
// }
// else if(x<0 && y>0){
//     alert('Quadrant II')
// }
// else if(x<0 && y<0){
//     alert('Quadrant III')
// }
// else if(x>0 && y<0){
//     alert('Quadrant IV')
// }
// else if(x==0 && y!=0){
//     alert('Y axis')
// }
// else if(x!=0 && Y==0){
//     alert('X axis')
// }

//Bài bonus em chịu :)