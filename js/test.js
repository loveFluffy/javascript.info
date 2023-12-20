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

// 用Object.assign()替代循环赋值的克隆方式，更简短
// let User = {
// 	name: "Pete",
// 	age: 30,
// };
// let clone = Object.assign([], User);

// 用 const 创建的对象引用，只是不能重新引用别的对象，对象内容本身可改
// const User = {
// 	name: "Pete",
// 	age: 9,
// };
// User.name = "May";
// alert(User.name);
// user = {
// 	permission: true,
// };//assignment to constant variable error.
// alert(user.permission);

// JS 中的this可以用于任何函数，即便该函数并非对象的方法。
// 在调用的时候才根据上下文确定this具体是什么
// function showName() {
// 	alert(this.name);
// }
// let User1 = {
// 	name: "May",
// 	age: 5,
// }
// let User2 = {
// 	name: "Jonh",
// 	age: 8,
// }
// User1.showName = showName;
// User2.showName = showName;
// User1.showName();
// User2.showName();
// showName(); //Error: undefined in strict mode, 在非strict模式下并不会报错

// Error: name undefined.
// function makeUser() {
// 	return {
// 		name: "John",
// 		ref: this
// 	};
// }
// let user = makeUser();
// alert(user.ref.name); // 结果是什么？

// 创建一个有三个方法的 calculator 对象：
// read() 提示输入两个值，并将其保存为对象属性，属性名分别为 a 和 b。
// sum() 返回保存的值的和。
// mul() 将保存的值相乘并返回计算结果。
// let calculator = {
// 	// ……你的代码……
// 	read() {
// 		this.a = prompt("input a:", "");
// 		this.b = prompt("input b:", "");
// 	},
// 	sum() {
// 		return +this.a + +this.b;
// 	},
// 	mul() {
// 		return this.a * this.b;
// 	},
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 有一个可以上下移动的 ladder 对象：
// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step++;
// 	},
// 	down() {
// 		this.step--;
// 	},
// 	showStep: function () { // 显示当前的 step
// 		alert(this.step);
// 	}
// };
// 现在，如果我们要按顺序执行几次调用，可以这样做：
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// 修改 up，down 和 showStep 的代码，让调用可以链接，就像这样：
// ladder.up().up().down().showStep().down().showStep(); // 展示 1，然后 0
// 这种方法在 JavaScript 库中被广泛使用。
// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step++;
// 		return this;
// 	},
// 	down() {
// 		this.step--;
// 		return this;
// 	},
// 	showStep: function () { // 显示当前的 step
// 		alert(this.step);
// 		return this;
// 	}
// };
// ladder.up().up().down().showStep().down().showStep(); // 展示 1，然后 0

// 是否可以创建像 new A() == new B() 这样的函数 A 和 B？
// function A() {}
// function B() {}
// let a = new A;
// let b = new B;
// alert( a == b ); // true
// 这题的意义是啥……我想到的第一个方法是把A B作为同一个object的俩构造函数

// 创建一个构造函数 Calculator，它创建的对象中有三个方法：
// read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
// sum() 返回这些属性的总和。
// mul() 返回这些属性的乘积。
// 例如：
// function read() {
// 	this.a = +prompt("a=", 0);
// 	this.b = +prompt("b=", 0);
// }
// function sum() {
// 	return this.a + this.b;
// }
// function mul() {
// 	return this.a * this.b;
// }
// function Calculator() {
// 	this.a = 0;
// 	this.b = 0;
// 	this.read = read;
// 	this.sum = sum;
// 	this.mul = mul;
// }
//// 有构造函数的时候，就是“构造函数”法定义；就不需要再用下面这种“字面量”方式定义了。
//// let Calculator = {
//// 	a: 0,
//// 	b: 0,
//// 	read: read(),
//// 	sum: sum(),
//// 	mul: mul(),
//// 	Calculator: Calculator(),
//// }
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
// let newN = new read(); //本质上任何函数都可以用new来调用！！！
// alert(newN.a);
// alert(newN.b);

// 创建一个构造函数 Accumulator(startingValue)。
// 它创建的对象应该：
// 将“当前 value”存储在属性 value 中。起始值被设置到构造器 startingValue 的参数。
// read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
// 换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和。
// 下面是示例代码：
// function Accumulator(startingValue) {
// 	this.value = startingValue;
// 	this.read = function () {
// 		this.value += +prompt("new value:", 0);
// 	}
// }
// let accumulator = new Accumulator(1); // 初始值 1
// accumulator.read(); // 添加用户输入的 value
// accumulator.read(); // 添加用户输入的 value
// alert(accumulator.value); // 显示这些值的总和

//可选链?.
// let user = null;
// alert(user?.address); // undefined
// alert(user?.address.street); // undefined

// Symbol 类型
// let a = Symbol("symbol a");
// let b = Symbol("symbol b");
// alert(a.toString()); //Symbol(symbol a)
// alert(b.description); //symbol b

//Symbol 的隐藏属性
// let user = { // 属于另一个代码
// 	name: "John"
// };
// let id = Symbol("id");
// user[id] = 1;
// alert(user[id]); // 我们可以使用 symbol 作为键来访问数据

// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");
// alert(Symbol.keyFor(globalSymbol)); // name，全局 symbol
// alert(Symbol.keyFor(localSymbol)); // undefined，非全局
// alert(localSymbol.description); // name
// alert(globalSymbol.description); // name

// Global Symbol
// let sym1 = Symbol.for("name");
// let sym2 = Symbol.for("name");
// let sym3 = Symbol.for("namex");
// let sym4 = Symbol("namex");
// let sym5 = Symbol("namex");
// alert(sym1 == sym2); //true
// alert(sym2 == sym3); //false
// alert(sym3 == sym4); //false
// alert(sym4 == sym5); //false

// 从技术上说，symbol 不是 100% 隐藏的。有一个内建方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 symbol。还有一个名为 Reflect.ownKeys(obj) 的方法可以返回一个对象的 所有 键，包括 symbol。但大多数库、内建方法和语法结构都没有使用这些方法。



// =========================== 数据类型 =========================== //

// 原始类型的方法
// let str = "hello";
// alert(str.toUpperCase());
// let n = 1234.56789;
// alert(n.toFixed(2)); //将数字舍入到给定的精度

// let n = Number("123");

// let str = "Hello";
// str.test = 5; // (*)Cannot create property 'test' on string 'Hello'
// alert(str.test);

// num.toString(base) base范围2~36
// let num = 255;
// alert(num.toString(16));
// alert(num.toString(8));
// alert(num.toString(2));
// 对于 36 进制来说，一个有趣且有用的例子是，当我们需要将一个较长的数字标识符转换成较短的时候，例如做一个短的 URL。可以简单地使用基数为 36 的数字系统表示
// alert(123456..toString(36)); // 2n9c
// 如果我们想直接在一个数字上调用一个方法，比如上面例子中的 toString，那么我们需要在它后面放置两个点 ..。
// 如果我们放置一个点：123456.toString(36)，那么就会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分。如果我们再放一个点，那么 JavaScript 就知道小数部分为空，现在使用该方法。
// 也可以写成 (123456).toString(36)。

// 舍入
// let num = -1234.56789;
// alert(Math.floor(num));
// alert(Math.ceil(num));
// alert(Math.round(num));
// alert(Math.trunc(num));

// Hello！我是一个会自我增加的数字！
// alert(9999999999999999); // 显示 10000000000000000
// 出现了同样的问题：精度损失。有 64 位来表示该数字，其中 52 位可用于存储数字，但这还不够。所以最不重要的数字就消失了。
// JavaScript 不会在此类事件中触发 error。它会尽最大努力使数字符合所需的格式，但不幸的是，这种格式不够大到满足需求。

//parseInt 和 parseFloat
// alert(parseInt("0xff", 16));
// alert(parseInt("ff", 16));
// alert(parseInt("2n9c", 36));

// Math 对象的其他方法
// alert(Math.random());
// alert(Math.max(1, 3, 4));
// alert(Math.min(1, 3, 4));
// alert(Math.pow(2, 3));

// 创建一个脚本，提示访问者输入两个数字，然后显示它们的总和。
// let a = +prompt("a=", 0);
// let b = +prompt("b=", 0);
// alert(a + b);

// alert((1.35).toFixed(1)); // 1.4
// 在下面这个类似的示例中，为什么 6.35 被舍入为 6.3 而不是 6.4？
// alert((6.35).toFixed(1)); // 1.4
// 在内部，6.35 的小数部分是一个无限的二进制。在这种情况下，它的存储会造成精度损失。让我们来看看：
// alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// // 精度损失可能会导致数字的增加和减小。在这种特殊的情况下，数字变小了一点，这就是它向下舍入的原因。那么 1.35 会怎样呢？
// alert( 1.35.toFixed(20) ); // 1.35000000000000008882
// // 在这里，精度损失使得这个数字稍微大了一些，因此其向上舍入。如果我们希望以正确的方式进行舍入，我们应该如何解决 6.35 的舍入问题呢？在进行舍入前，我们应该使其更接近整数：
// alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
// // 请注意，63.5 完全没有精度损失。这是因为小数部分 0.5 实际上是 1/2。以 2 的整数次幂为分母的小数在二进制数字系统中可以被精确地表示，现在我们可以对它进行舍入：
// alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
// alert((6.35 * 10).toFixed(0) / 10); // 6.3

// 创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字为止。结果值必须以数字形式返回。
// 访问者也可以通过输入空行或点击“取消”来停止该过程。在这种情况下，函数应该返回 null。
// function readNumber() {
// 	while (true) {
// 		let n = prompt("Input a number:", 0);
// 		if (n === "" || n === null) {
// 			return null;
// 		}
// 		if (isFinite(n)) {
// 			return +n;
// 		}
// 	}
// }
// alert(readNumber());

// 内建函数 Math.random() 会创建一个在 0 到 1 之间（不包括 1）的随机数。编写一个 random(min, max) 函数，用以生成一个在 min 到 max 之间的随机浮点数（不包括 max)）。
// 运行示例：
// function random(min, max) {
// 	return Math.random() * (max - min) + min;
// }
// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525

// 创建一个函数 randomInteger(min, max)，该函数会生成一个范围在 min 到 max 中的随机整数，包括 min 和 max。
// 在 min..max 范围中的所有数字的出现概率必须相同。
// 运行示例：
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// function randomInteger(min, max) {
// 	let step = 1 / (max - min + 1);
// 	return Math.floor(Math.random() / step) + min;
// 	// here rand is from min to (max+1)
// 	// let rand = min + Math.random() * (max + 1 - min);
// 	// return Math.floor(rand);
// }
// alert(randomInteger(1, 3));

// for...of 遍历字符串的每个字符
// let str = "Hello";
// for (let char of str) {
// 	alert(char);
// }

// 在 JavaScript 中，字符串不可更改。改变字符是不可能的
// let str = "Hello";
// str[0] = "h"; // Error

// 改变大小写
// alert("Hello".toLowerCase());
// alert("Hello".toUpperCase());
// alert("Hello"[0].toLowerCase());

// 查找子字符串










