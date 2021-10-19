////////////////Build - in
// console.log('Thong bao'); ////chay trong console 
// alert('Thong bao');/////////// bat len thong bao messege
// confirm('Xac nhan ');/////////bat len thong bao messege co xac nhan
// prompt('xac nhan'); //////////bat len thong bao messege co xac nhan va co o input
// setTimeout(function() { ////// chay doan code sau 1 time chay 1 lan
//     confirm('Xac nhan ');
// }, 2000);
// setInterval(function(){/////// chay doan code sau 1 time chay  n lan
//     console.log('Thong bao'+ Math.random())
// }, 2000);
////////////////// Toan Tu
// var a = 1*2;
// console.log(a);
// var fullName = 'Gia Long';
// var c = 1;
// var d = 2;
// if(c<d){
//     console.log('Dung');
// }
// if (c > 0 && d > 0){
//     alert('a & b ddeu lon hon khong');
// }
/////////////////////toan tu ++ --
// prefix tien to & postfix hau to
// var number = 6;
// var output = ++number *2 - number--*2;
// 7*2 - 7*2 = 0
///////////////// Toan Tu gan
 // toán tử gán:
//  x += y
//  x -= y
//  x *= y
//  x /= y
//  x **= y => x = x ** y
////////// Cong chuoi 
// var firstName = 'Long '
// var lastName = 'Gia'
// console.log(firstName+lastName);
/////// Toán tử so sánh
// == bang
// != khong bang 
//////// Boolean
// var isSucess = true;
// console.log(isSucess);
///////// if - else
//  var isSucess = 1>2;
//  if(isSucess)
//     console.log('DKdung')
//  else
//     console.log('ddksai')
///////////// toan tu logic
// && => and
// || => or
// ! => not 
///////////////// kieu du lieu
// // nguyen thuy :
// Number
// String
// Boolean
// undefined var age;
// null var isNull = null;
// Symbol var id = Symbol('id'); => unique co tinh duy nhat
// // phuc tap
// Function
// Object => array and object => du lieu tham chieu
// var id = Symbol('id');
// console.log(id);
/////////////////////// // function
// var myFunction = function() {
//     alert('Hiiiiiiiii');
// }
// myFunction();
// /////////////////////// object
// var myObject = {
//     name: 'Long',
//     age: 18,
//     adress: 'Hanoi'
// }
// console.log('myObject:', myObject );
// /////////////////////// array
// var myArray = [
//     'javascript',
//     'php',
//     'ruby'
// ];
// console.log(myArray);
// console.log(typeof myArray)/// typeof isNull =>> object
//////////// toán tử
//=== !== so sánh kiểu dữ liệu và giá trị 
//var fullName = new String('Long');=> khởi tạo đối tượng 
var fullName = 'Gia Long'; 
var firstName = "Gia";//=> kiểu dữ liệu String
console.log(typeof fullName);
alert(fullName);
console.log(fullName.length);
// c1 truyền bt
console.log('Toi la: '+ fullName);
console.log('Toi la: '+ firstName);
// template string ES6
console.log('Long');
console.log(`Toi la: ${fullName} `); 
