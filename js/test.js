"use strict";

// =========================== JavaScript 基础知识 =========================== //

// alert("I'm Javascript!");
// alert("I'm Javascript too!");

// let c = "stringc";
// c = "stringc"; strict模式下变量必须定义

// const ct = "1990.01.01";

// 字符串类型
// let admin = "John";
// let nameJ = admin;
// alert(nameJ);
// nameJ = "hello";
// alert(nameJ + `${1 + 2}`); //反引号配合${}可以进行计算
// let nameN = "Tom";
// alert(`hello ${1}`);
// alert(`hello ${"nameN"}`);
// alert(`hello ${nameN}`);

// 布尔类型
// let bTest1 = true;
// let bTest2 = false;
// alert(bTest1);
// alert(bTest2);
// let bTest3 = 1 > 3;
// alert(bTest3);

// null
// let nameN = null;
// alert(nameN);

// undefined 未赋值的变量默认类型就是这个
// let nameU = undefined;
// let nameU;
// alert(nameU);

// typeof operator
// alert(typeof "hello");//"string"
// alert(typeof 0);//"number"
// alert(typeof true);//"boolean"
// alert(typeof undefined);//"undefined"
// alert(typeof null);//"object" this is a well known error in JS
// alert(typeof 10n);//"bigint"
// alert(typeof Math);//"object"
// alert(typeof alert);//"function" there is no function type but this is useful

// String() 显式转为string类型
// let value = true;
// alert(typeof value);
// alert(typeof String(value));

// Number() 显式转为number类型
// alert("6" / "2");
// let str = "123";
// alert(typeof str);
// alert(typeof Number(str));

// alert("" + 1 + 0);
// alert("" - 1 + 0);
// alert(true + false);
// alert(6 / "3");
// alert("2" * "3");
// alert(4 + 5 + "px");
// alert("$" + 4 + 5);
// alert("4" - 2);
// alert("4px" - 2);
// alert(7 / 0);
// alert(" -9 " + 5);
// alert(" -9 " - 5);
// alert(null + 1);
// alert(undefined + 1);
// alert(" \t \n" - 2);

// let age = prompt("How old are you?", 100);
// alert(`You are ${age} years old!`);
// let age2 = prompt("How old are you?");
// alert(`You are ${age2} years old!`);
// let test = prompt("Test");
// let isBoss = confirm("Are you the boss?");
// alert(isBoss);
// let nameN = prompt("What's your name?", "name");
// alert(`Your name is ${nameN}.`);

// let a, b;
// b = 2;
// let c = 3 - (a = 1 + b);
// alert(c);
// alert(3 ** 2); //幂运算
// alert(6 % 4); //取余

// let a = 2;
// a += 3;
// a *= 2;
// a -= 5;
// a /= 2;
// alert(a);

// a funny consequence
// alert(Boolean(0));//false
// alert(Boolean("0"));//true
// alert(0 == "0");//true

// let a = prompt("First number:", "");
// let b = prompt("Second number:", "");
// alert(+a + +b);
// alert(a + b);

// alert(false === 0);
// alert(false == 0);

// alert(5 > 4);
// alert("apple" > "pineapple");
// alert("2" > "12");
// alert(undefined == null);
// alert(undefined === null);
// alert(null == "\n0\n");
// alert(null === "\n0\n");

// let y = prompt("guess a year:", "");
// if (y == 2011) {
// 	alert("You are right!");
// } else {
// 	alert("You are wrong!");
// }
// let x = (y > 2011) ? alert("too big.") :
// 	(y < 2011) ? alert("too small.") : alert("You are right!");

// let result = prompt("What's the \"official\" name of Javascript?", "");
// if (result == "ECMAScript") {
// 	alert("Right!");
// } else {
// 	alert("You don't know? \"ECMAScript\"!");
// }

// let n = +prompt("Input a number:", "");
// if (n > 0) {
// 	alert(1);
// } else if (n < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }

// let result = (a + b < 4) ? "Below" : "Over";

// let message = (login == 'Employee') ? 'Hello' :
// 	(login == 'Director') ? 'Greetings' :
// 		(login == '') ? 'No login' : '';

// let age = +prompt("Input age:", "");
// if (age >= 14 && age <= 90) {
// 	alert("age between 14~90.");
// } else {
// 	alert("age not between 14~90.");
// }

// let nameN = prompt("Who is there?", "");
// if (nameN == "Admin") {
// 	let password = prompt("Password?", "");
// 	if (password === "" || password === null) {
// 		alert("Cancled.");
// 	} else if (password == "TheMaster") {
// 		alert("Welcome!");
// 	} else {
// 		alert("Wrong passworld.");
// 	}
// } else if (nameN === "" || nameN === null) {
// 	alert("Cancled.");
// } else {
// 	alert("I don't know you.");
// }

// let i = 0;
// while (i < 3) {
// 	alert(i);
// 	i++;
// }

// do {
// 	alert(i);
// 	i--;
// } while (i > 0);

// for (let i = 0; i < 3; i++) {
// 	alert(i);
// }

// for (let i = 2; i <= 10; i = i + 2) {
// 	alert(i);
// }

// let i = 0;
// while (i < 3) {
// 	alert(`number ${i}!`);
// 	i++;
// }

// do {
// 	let result = +prompt("Input a number >100: ", "");
// } while (!(result > 100 || result === "" || result === null));

// let result = "";
// do {
// 	result = +prompt("Input a number >100: ", "");
// } while (result === "" || result === null || result <= 100);

// 寻找质数
// let n = prompt("n=", 2);
// for (let i = 2; i <= n; i++) {
// 	let yesorno = true;
// 	for (let j = 2; j < i; j++) {
// 		if (!(i % j)) {
// 			yesorno = false;
// 			break;
// 		}
// 	}
// 	if (yesorno) {
// 		alert(i);
// 	}
// }

// let a = +prompt("a=", 1);
// switch (a) {
// 	case 1:
// 		alert("case 1");
// 		break;
// 	case 2:
// 		alert("case 2");
// 		break;
// 	default:
// 		alert("defalut");
// }

// switch (browser) {
// 	case 'Edge':
// 		alert("You've got the Edge!");
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert('Okay we support these browsers too');
// 		break;

// 	default:
// 		alert('We hope that this page looks ok!');
// }

// if (browser == 'Edge') {
// 	alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
// 	alert('Okay we support these browsers too');
// } else {
// 	alert('We hope that this page looks ok!');
// }

// let a = +prompt('a?', '');
// if (a == 0) {
// 	alert(0);
// }
// if (a == 1) {
// 	alert(1);
// }

// if (a == 2 || a == 3) {
// 	alert('2,3');
// }

// switch (a) {
// 	case 0:
// 		alert(0);
// 		break;
// 	case 1:
// 		alert(1);
// 		break;
// 	case 1:
// 	case 2:
// 	case 3:
// 		alert('2,3');
// 		break;
// 	case 1:
// 	default: ;
// }

// function showMessage() {
// 	alert("Message delivered.");
// }
// showMessage();

//function checkAge(age) {
// return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
//return (age > 18) || confirm('Do you have your parents permission to access this page?');

// if (age > 18) {
// 	return true;
// } else {
// 	return confirm('Do you have your parents permission to access this page?');
// }
//}

// function min(a, b) {
// 	return (a >= b) ? b : a;
// }
// alert(min(2, 3));

// let min = (a, b) => a < b ? a : b;

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }
// ask(
// 	"Do you agree?",
// 	() => alert("You agreed."),
// 	() => alert("You canceled the execution.")
// );




// =========================== 代码质量 =========================== //

// function pow(x, n) {
// 	let result = 1;
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

// let x = prompt("x?", ''), n = prompt("n?", '');
// if (n <= 0) {
// 	alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else {
// 	alert(pow(x, n));
// }


// =========================== Object（对象）：基础知识 =========================== //

// let obj = {};
// obj._proto_ = 5;
// alert(obj._proto_);

// let obj = {
// 	name: "John",
// 	age: 9,
// 	key: 1,
// };
// alert("name" in obj);
// alert(obj.name);
// alert("Name" in obj);
// alert(obj.Name); //访问不存在的属性，只会返回undefined，不会报错！
// for (let key in obj) {
// 	alert(key);
// 	alert(obj[key]);
// 	alert(obj.key);
// 	alert(obj["key"]);
// }
// delete obj.key;
// alert("key" in obj);

// 按下面的要求写代码，一条对应一行代码：
//     创建一个空的对象 user。
//     为这个对象增加一个属性，键是 name，值是 John。
//     再增加一个属性，键是 surname，值是 Smith。
//     把键为 name 的属性的值改成 Pete。
//     删除这个对象中键为 name 的属性。
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。应该像这样：
// function isEmpty(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;
// }
// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

// 我们有一个保存着团队成员工资的对象：
// 写一段代码求出我们的工资总和，将计算结果保存到变量 sum。从所给的信息来看，结果应该是 390。如果 salaries 是一个空对象，那结果就为 0。
// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }
// alert(sum);

// 创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性值都乘以 2。例如：
// 注意 multiplyNumeric 函数不需要返回任何值，它应该就地修改对象。 P.S.用 typeof 检查值类型。
// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] == "number") {
// 			obj[key] *= 2;
// 		}
// 	}
// }
// 在调用之前
// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
// multiplyNumeric(menu);
// 调用函数之后
// menu = {
// 	width: 400,
// 	height: 600,
// 	title: "My menu"
// };
// alert(menu.width);

//Object.assign() 合并对象
// let User = {
// 	name: "John",
// }
// let permission1 = {
// 	canView: true,
// }
// let permission2 = {
// 	canEdit: true,
// }
// Object.assign(User, permission1, permission2);
// for (let key in User) {
// 	alert(User[key]);
// }

