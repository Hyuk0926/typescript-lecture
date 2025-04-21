var string = 'Hello, world!';
var number = 42;
//const bigint: bigint = 100n;
var boolean = true;
var nullType = null;
var undefinedType = undefined;
var anyType = 'This can be anything'; //any 타입은 어떤 타입이든지 가능하다. //any타입을 사용하는 것은 지양할 것
//기본적인 6가지 타입  //이 변수가 어떤 타입인지 명시적으로 적어줌 //가독성이 좋아짐
var array = [1, 2, 3, 4, 5]; //어레이의 item들이 어떤 타입인지 명시적으로 적어줘야 한다(맞는 타입만 들어올 수 있다)
var array2 = [true, false, true]; //example of boolean array
//자바스크립트는 CamelCase로 작성하는 것이 좋다
var letValue = 'Hello,world!'; //string 타입과 number 타입만 들어올 수 있다
//enum은 타입스크립트에서만 사용되는 키워드 //enum은 자바스크립트로 변환되면 객체로 변환된다
//정해진 item들만 허용하고 싶을 때 사용한다(접근 제한을 두고 싶을 때 사용한다)
//enum은 대문자로 작성하는 것이 좋다
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
    // ... X
})(Role || (Role = {}));
var someUserRole = Role.ADMIN; //enum 타입은 enum으로만 들어올 수 있다
console.log(someUserRole); //admin
