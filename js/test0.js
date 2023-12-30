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
// let str = "hello world! Hello world.";
// alert(str.indexOf("world"), 3);
// alert(str.lastIndexOf("world")); //从最后逆向搜索
// alert(str.lastIndexOf("world")); //从最后逆向搜索

//获取子字符串
// let str = "hello world! Hello world.";
// alert(str.slice(3, 9));

// 比较字符串
// alert("a".codePointAt(0));
// alert("A".codePointAt(0));
// alert("abc".codePointAt(1));

// 正确的比较
// alert('Österreich'.localeCompare('Zealand')); //-1

// 首字母大写
// 写一个函数 ucFirst(str)，并返回首字母大写的字符串 str，例如：
// function ucFirst(str) {
// 	if (str == "") {
// 		return "";
// 	}
// 	return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
// }
// alert(ucFirst("joHn"));

// 检查 spam
// 写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
// 函数必须不区分大小写：
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
// function checkSpam(str) {
// 	let st = str.toLowerCase();
// 	// return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// 	if (~st.indexOf("viagra") || ~st.indexOf("xxx")) {
// 		return true;
// 	}
// 	return false;
// }
// alert(checkSpam('buy ViAgRA now'));// == true
// alert(checkSpam('free xxxxx'));// == true
// alert(checkSpam("innocent rabbit"));// == false

// 截断文本
// 创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
// 函数的结果应该是截断后的文本（如果需要的话）。
// 例如：
// function truncate(str, maxlength) {
// 	if (str.length > maxlength) {
// 		let Str = str.slice(0, maxlength - 1) + "…";
// 		return Str;
// 	} else {
// 		return str;
// 	}
// }
// alert(truncate("What I'd like to tell on this topic is:", 20));// = "What I'd like to te…"
// alert(truncate("Hi everyone!", 20));// = "Hi everyone!"

// 提取货币
// 我们有以 "$120" 这样的格式表示的花销。意味着：先是美元符号，然后才是数值。
// 创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回。
// 例如：
// function extractCurrencyValue(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] > "0" && str[i] <= "9") {
// 			return parseInt(str.slice(i));
// 		}
// 	}
// 	return 0;
// }
// alert(extractCurrencyValue('$120') === 120); // true


// =========================== 数据类型：数组 =========================== //

// let fruit = ["apple", "pear", "peach"];
// fruit[3] = "plum"; //增
// fruit[0] = "pineapple"; //改
// alert(fruit.length);//数组长度
// alert(fruit);

// pop/push, shift/unshift
// let fruit = ["apple", "pear", "peach"];
// alert(fruit.pop());
// fruit.push("Banana");
// alert(fruit);

// 多维数组
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// alert(arr[1][1]);

// toString()
// alert([] + 1); // "1"
// alert([1] + 1); // "11"
// alert([1, 2] + 1); // "1,21"

// 数组被拷贝了吗?下面的代码将会显示什么？
// let fruits = ["Apples", "Pear", "Orange"];
// 在“副本”里 push 了一个新的值
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// fruits 里面是什么？
// alert(fruits.length); // ?

// 数组操作。我们试试下面的 5 个数组操作。
// 创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
// 将 “Rock - n - Roll” 从数组末端添加进去。
// 用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
// 去掉数组的第一个值并显示它。
// 在数组前面添加 Rap 和 Reggae。
// let styles = ["Jazz", "Blues"];
// styles.push("Rock - n - Roll");
// styles[Math.floor(styles.length / 2)] = "Classics";
// alert(styles.shift())
// // styles.unshift(["Rap", "Reggae"]);
// styles.unshift("Rap", "Reggae");
// alert(styles);

// 在数组上下文调用 结果是什么？为什么？
// let arr = ["a", "b"];
// arr.push(function () {
// 	alert(this);
// });
// arr[2](); // ?

// 输入数字求和 写出函数 sumInput()，要求如下：
// 使用 prompt 向用户索要值，并存在数组中。
// 当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
// 计算并返回数组所有项之和。
// P.S. 0 是有效的数字，不要因为是 0 就停止问询。
// function sumInput() {
// 	let arr = [];
// 	let val = 0;
// 	let sum = 0;
// 	while (true) {
// 		val = prompt("Input a value= ", 0);
// 		if (val === "" || val === null || +val === NaN) {
// 			break;
// 		}
// 		arr.push(+val);
// 		sum += +val;
// 	}
// 	return sum;
// }
// alert(sumInput());

// function sumInput() {
// 	let numbers = [];
// 	while (true) {
// 		let value = prompt("A number please?", 0);
// 		// 应该结束了吗？
// 		if (value === "" || value === null || !isFinite(value)) break;
// 		numbers.push(+value);
// 	}
// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }
// alert(sumInput());

// 最大子数组
// 输入是以数字组成的数组，例如 arr = [1, -2, 3, 4, -9, 6].
// 任务是：找出所有项的和最大的 arr 数组的连续子数组。
// 写出函数 getMaxSubSum(arr)，用其找出并返回最大和。
// 例如：
// getMaxSubSum([-1, 2, 3, -9]) == 5（高亮项的加和）
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6（所有项的和）
// 如果所有项都是负数，那就一个项也不取（子数组是空的），所以返回的是 0：
// getMaxSubSum([-1, -2, -3]) = 0
// 请尝试想出一个快速的解决方案：复杂度可以是 O(n2)，有能力达到 O(n) 则更好。
// function getMaxSubSum(arr) {
// }


// =========================== 数组方法 =========================== //

// 添加/移除数组元素
// 我们已经学了从数组的首端或尾端添加和删除元素的方法：
//     arr.push(...items) —— 从尾端添加元素，
//     arr.pop() —— 从尾端提取元素，
//     arr.shift() —— 从首端提取元素，
//     arr.unshift(...items) —— 从首端添加元素。
// 这里还有其他几种方法。

// arr.splice(start[, deleteCount, elem1, ..., elemN])
//它可以做所有事情：添加，删除和插入元素。
// 它从索引 start 开始修改 arr：删除 deleteCount 个元素并在当前位置插入 elem1, ..., elemN。最后返回被删除的元素所组成的数组。
// 仅添加
// let arr = [0, 1, 2, 3, 4];
// arr.splice(2, 0, "test");
// alert(arr);

// slice

// 如果类数组对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理：此对象中的元素将被添加：
// let arr = [1, 2];
// let arrayLike = {
// 	0: "something",
// 	1: "else",
// 	[Symbol.isConcatSpreadable]: true,
// 	length: 2
// };
// alert(arr.concat(arrayLike)); // 1,2,something,else

// forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach((itemm, index) => {
// 	alert(`${itemm} is at index ${index}`);
// });
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
// 	alert(`${item} is at index ${index} in ${array}`);
// });

// find 函数
// let user = [
// 	{ id: 1, Name: "Tom", },
// 	{ id: 2, Name: "John", },
// 	{ id: 3, Name: "Sam", },
// 	{ id: 4, Name: "Amy", },
// ];
// // let tmpUser = user.find(item => item.id == 2);
// // alert(tmpUser.Name);
// let tmp = user.find(function (item) { if (item.id == 2) return true; });
// alert(tmp.Name);

// 复习箭头函数
// let tmp = {
// 	name: "tmpName",
// 	testFunc: function () {
// 		return true;
// 	},
// 	testFunc2: () => { return true; },
// }
// // alert(tmp.testFunc());
// alert(tmp.testFunc2());

// filter 函数
// let user = [
// 	{ id: 1, Name: "Tom", },
// 	{ id: 2, Name: "John", },
// 	{ id: 3, Name: "Sam", },
// 	{ id: 4, Name: "Amy", },
// ];
// let result = user.filter(function (item) {
// 	if (item.id < 3) {
// 		return item;
// 	}
// });
// // let result = user.filter(item => item.id < 3);
// alert(result.length);

// sort 排序函数
// let arr = [1, 15, 20, 2, 3];
// function compareNum1(a, b) {
// 	if (+a > +b) {
// 		return 1;
// 	} else if (+a == +b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// }

// function compareNum2(a, b) {
// 	// alert(a + "<>" + b);
// 	return a - b;
// }
// arr.sort(compareNum); // 注意这里只传入函数名，没有括号
// alert(arr);
// alert(arr.sort(compareNum2)); //这样写一行也行
// alert(arr.sort((a, b) => a - b)); // 用箭头函数还可以更简单

// reverse
// let arr = [1, 15, 20, 2, 3];
// alert(arr.reverse());

// split / join
// let names = "John, Tom, Sam";
// // let arr = names.split(", ", 2);
// let arr = names.split(", ");
// let arr = names.split("");
// let namex = arr.join(" x ");
// let names2 = arr.join("");
// alert(names2);

// reduce/reduceRight
// let arr = [1, 2, 3, 4];
// // let result = arr.reduce((sum, current) => sum + current, 0);
// let result = arr.reduce(function (sum, item) { return sum += item });
// alert(result);

// isArray()
// alert(typeof []);
// alert(typeof {});
// alert(Array.isArray([]));

// 大多数方法都支持 “thisArg”
// 几乎所有调用函数的数组方法 —— 比如 find，filter，map，除了 sort 是一个特例，都接受一个可选的附加参数 thisArg。





// 将 border-left-width 转换成 borderLeftWidth
// 编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。
// 即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。
// 示例：
// 提示：使用 split 将字符串拆分成数组，对其进行转换之后再 join 回来。
// function camelize(str) {
// 	let arr = str.split("-");
//
// 	// 方法1
// 	// let newArr = arr.map((item, index) => {
// 	// 	if (item == "" || index == 0) {
// 	// 		return item;
// 	// 	}
// 	// 	return item[0].toUpperCase() + item.slice(1);
// 	// });
// 	// return newArr.join("");
//
// 	// 方法2
// 	// for (let i = 1; i < arr.length; i++) {
// 	// 	if (arr[i] == "") {
// 	// 		continue;
// 	// 	}
// 	// 	arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// 	// }
// 	// return arr.join("");
// }
// alert(camelize("background-color"));// == 'backgroundColor';
// alert(camelize("list-style-image"));// == 'listStyleImage';
// alert(camelize("-webkit-transition"));// == 'WebkitTransition';

// 过滤范围
// 写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大于或等于 a，且小于或等于 b 的元素，并将结果以数组的形式返回。
// 该函数不应该修改原数组。它应该返回新的数组。
// 例如：
// function filterRange(arr, a, b) {
// 	// 写法1
// 	// let filterdArr = [];
// 	// filterdArr = arr.filter((item) => {
// 	// 	if (item >= a && item <= b) {
// 	// 		return item;
// 	// 	}
// 	// });
// 	// 写法2
// 	// filterdArr = arr.filter(item => (item >= a && item <= b));
// 	// return filterdArr;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1（匹配值）
// alert(arr); // 5,3,8,1（未修改）

// 原位（in place）过滤范围
// 写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。
// 该函数应该只修改数组。它不应该返回任何东西。
// 例如：
// function filterRangeInPlace(arr, a, b) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > b || arr[i] < a) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值
// alert(arr); // [3, 1]

// 降序排列
// let arr = [5, 2, 1, -10, 8];
// // ……你的代码以降序对其进行排序
// arr.sort((a, b) => b - a);
// alert(arr); // 8, 5, 2, 1, -10

// 复制和排序数组
// 我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
// 创建一个函数 copySorted(arr) 返回这样一个副本。
// function copySorted(arr) {
// 	// return arr.slice().sort();
// 	let copy = arr.concat();
// 	return copy.sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

// 创建一个可扩展的 calculator
// 创建一个构造函数 Calculator，以创建“可扩展”的 calculator 对象。
// 该任务由两部分组成。
//     首先，实现 calculate(str) 方法，该方法接受像 "1 + 2" 这样格式为“数字 运算符 数字”（以空格分隔）的字符串，并返回结果。该方法需要能够理解加号 + 和减号 -。
//     用法示例：
// ================== 我的方法 ================== //
// function Calculator() {
// 	this.calculate = function (str) {
// 		let arr = str.split(" ");
// 		if (arr[1] == "+") {
// 			return +arr[0] + +arr[2];
// 		}
// 		if (arr[1] == "*") {
// 			return +arr[0] * +arr[2];
// 		}
// 	};
// 	this.addMethod = function (name, func) {
// 		let pre = this.calculate;
// 		this.calculate = function (str) {
// 			let result = pre(str);
// 			if (result) {
// 				return result;
// 			}
// 			let arr = str.split(" ");
// 			if (arr[1] == name) {
// 				return func(+arr[0], +arr[2]);
// 			}
// 		}
// 	};
// }
// // let calc = new Calculator;
// // alert(calc.calculate("3 + 7")); // 10
// // 然后添加方法 addMethod(name, func)，该方法教 calculator 进行新操作。它需要运算符 name 和实现它的双参数函数 func(a,b)。
// // 例如，我们添加乘法 *，除法 / 和求幂 **：
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8
//     此任务中没有括号或复杂的表达式。
//     数字和运算符之间只有一个空格。
//     你可以自行选择是否添加错误处理功能。
// ================== 答案方法 ================== //
// function Calculator() {
// 	this.methods = {
// 		"-": (a, b) => a - b,
// 		"+": (a, b) => a + b
// 	};
// 	this.calculate = function (str) {
// 		let split = str.split(' '),
// 			a = +split[0],
// 			op = split[1],
// 			b = +split[2];
// 		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
// 			return NaN;
// 		}
// 		return this.methods[op](a, b); // methods[op]用方括号方式访问，方括号里面可以是个变量
// 	};
// 	this.addMethod = function (name, func) {
// 		this.methods[name] = func;
// 	};
// }

// 映射到 names
// 你有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。
// 例如：
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map(item => item.name);/* ... your code */
// alert(names); // John, Pete, Mary

// 映射到对象
// 你有一个 user 对象数组，每个对象都有 name，surname 和 id。
// 编写代码以该数组为基础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。
// 例如：
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [john, pete, mary];
// //我的写法
// // let usersMapped = users.map(item => { return { fullName: item.name + " " + item.surname, id: item.id }; });/* ... your code ... */
// //答案写法
// // let usersMapped = users.map(user => ({
// // 	fullName: `${user.name} ${user.surname}`,
// // 	id: user.id
// // }));
// 有两种箭头函数的写法：直接返回值 value => expr 和带主体的 value => {...}。
// JavaScript 在这里会把 { 视为函数体的开始，而不是对象的开始。解决方法是将它们包装在普通括号 () 中
// // usersMapped = [
// // 	{ fullName: "John Smith", id: 1 },
// // 	{ fullName: "Pete Hunt", id: 2 },
// // 	{ fullName: "Mary Key", id: 3 }
// // ]
// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // John Smith
// 所以，实际上你需要将一个对象数组映射到另一个对象数组。在这儿尝试使用箭头函数 => 来编写。

// 按年龄对用户排序
// 编写函数 sortByAge(users) 获得对象数组的 age 属性，并根据 age 对这些对象数组进行排序。
// 例如：
// function sortByAge(users) {
// 	users.sort((a, b) => a.age - b.age);
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [pete, john, mary];
// sortByAge(arr);
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// 随机排列数组(跳过了此题)
// 编写函数 shuffle(array) 来随机排列数组的元素。
// function shuffle(array) {
// 	let arr = array.map(() => Math.random());
// 	alert(arr);
// 	// return array.sort((a, b));
// }
// // 多次运行 shuffle 可能导致元素顺序的不同。例如：
// let arr = [1, 2, 3];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// arr = [3, 1, 2]
// ...
// 所有元素顺序应该具有相等的概率。例如，可以将 [1,2,3] 重新排序为 [1,2,3] 或 [1,3,2] 或 [3,1,2] 等，每种情况的概率相等。

// 获取平均年龄
// 编写 getAverageAge(users) 函数，该函数获取一个具有 age 属性的对象数组，并返回平均年龄。
// 平均值的计算公式是 (age1 + age2 + ... + ageN) / N。
// 例如：
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [john, pete, mary];
// function getAverageAge(users) {
// 	return users.reduce((sum, current) => sum + current.age, 0) / users.length;
// }
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// 数组去重
// arr 是一个数组。
// 创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。
// 例如：
//我的做法
// function unique(arr) {
// 	/* your code */
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] == arr[j]) {
// 				arr.splice(j, 1);
// 				j--;
// 			}
// 		}
// 	}
// 	return arr;
// }
// 答案做法
// function unique(arr) {
// 	let result = [];
// 	for (let str of arr) {
// 		if (!result.includes(str)) {
// 			result.push(str);
// 		}
// 	}
// 	return result;
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(strings)); // Hare, Krishna, :-O

// 从数组创建键（值）对象
// 假设我们收到了一个用户数组，形式为：{id:..., name:..., age:... }。
// 创建一个函数 groupById(arr) 从该数组创建对象，以 id 为键（key），数组项为值。
// 例如:
// 我的写法
// function groupById(arr) {
// 	return arr.map((item) => {
// 		let tmp = { [item.id]: item, };
// 		return tmp;
// 	});
// }
// 答案写法: 累加器初始值是一个空的对象。每次迭代给这个对象添加一个新属性。最后返回累加器就行
// function groupById(array) {
// 	return array.reduce((obj, value) => {
// 		obj[value.id] = value;
// 		return obj;
// 	}, {})
// }
// let users = [
// 	{ id: 'john', name: "John Smith", age: 20 },
// 	{ id: 'ann', name: "Ann Smith", age: 24 },
// 	{ id: 'pete', name: "Pete Peterson", age: 31 },
// ];
// let usersById = groupById(users);
// alert(usersById[0].john.name);
// 调用函数后，我们应该得到：
// usersById = {
// 	john: { id: 'john', name: "John Smith", age: 20 },
// 	ann: { id: 'ann', name: "Ann Smith", age: 24 },
// 	pete: { id: 'pete', name: "Pete Peterson", age: 31 },
// }
// 处理服务端数据时，这个函数很有用。
// 在这个任务里我们假设 id 是唯一的。没有两个具有相同 id 的数组项。
// 请在解决方案中使用数组的 .reduce 方法。


// =========================== Iterable object（可迭代对象） =========================== //

// let range = {
// 	from: 1,
// 	to: 5
// };
// // 1. for..of 调用首先会调用这个：
// range[Symbol.iterator] = function () {
// 	// ……它返回迭代器对象（iterator object）：
// 	// 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
// 	return {
// 		current: this.from,
// 		last: this.to,
// 		// 3. next() 在 for..of 的每一轮循环迭代中被调用
// 		next() {
// 			// 4. 它将会返回 {done:.., value :...} 格式的对象
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };
// // 现在它可以运行了！
// for (let num of range) {
// 	alert(num); // 1, 然后是 2, 3, 4, 5
// }

// let range = {
// 	from: 1,
// 	to: 5,
// 	[Symbol.iterator]() {
// 		this.current = this.from;
// 		return this;
// 	},
// 	next() {
// 		if (this.current <= this.to) {
// 			return { done: false, value: this.current++ };
// 		} else {
// 			return { done: true };
// 		}
// 	}
// };
// for (let num of range) {
// 	alert(num); // 1, 然后是 2, 3, 4, 5
// }


// =========================== Map and Set（映射和集合） =========================== //

// let obj1 = {
// 	name: "obj1",
// };
// let obj2 = {
// 	name: "obj2",
// };
// let map1 = {}; //new Map();
// map1[obj1] = "test1";
// alert(map1[obj1]); // test1
// map1[obj2] = "test2";
// alert(map1[obj2]); // test2
// alert(map1[obj1]); // 也是输出test2  ， test1被覆盖掉了！

// map 可以使用对象作为键
// 要用 map.set() 和 map.get() 而不是map[]，后者会将map当成普通对象
// let map = new Map();
// let obj1 = {
// 	name: "obj1",
// };
// let obj2 = {
// 	name: "obj2",
// };
// map.set(obj1, "OBJ1");
// map.set(obj2, "OBJ2");
// alert(map.get(obj1));
// alert(map.get(obj2));

// 过滤数组中的唯一元素
// 定义 arr 为一个数组。
// 创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。
// 例如：
// function unique(arr) {
// 	/* 你的代码 */
// 	// let set = new Set(arr);
// 	// for (let i = 0; i < arr.length; i++) {
// 	// 	set.add(values[i]);
// 	// }
// 	// return Object.fromEntries(set.entries());
// 	return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(values)); // Hare, Krishna, :-O
// P.S. 这里用到了 string 类型，但其实可以是任何类型的值。
// P.S. 使用 Set 来存储唯一值。

// let set1 = new Set(['a', 'b', 'c']);
// let set2 = new Set(['a', 'c', 'b']);
// alert(set1 == set2); //false

// 过滤字谜（anagrams）
// Anagrams 是具有相同数量相同字母但是顺序不同的单词。
// 例如：
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// 写一个函数 aclean(arr)，它返回被清除了字谜（anagrams）的数组。
// 例如：
// 对于所有的字谜（anagram）组，都应该保留其中一个词，但保留的具体是哪一个并不重要。
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {
// 	let set = new Set(arr);

// }
// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// 迭代键
// 我们期望使用 map.keys() 得到一个数组，然后使用例如 .push 等特定的方法对其进行处理。
// 但是运行不了：
// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// // Error: keys.push is not a function
// keys.push("more");
// // 为什么？我们应该如何修改代码让 keys.push 工作？
// alert(keys);

// 存储 "unread" 标识
// 这里有一个 messages 数组：
// let messages = [
// 	{ text: "Hello", from: "John" },
// 	{ text: "How goes?", from: "John" },
// 	{ text: "See you soon", from: "Alice" }
// ];
// 你的代码可以访问它，但是 message 是由其他人的代码管理的。该代码会定期添加新消息，删除旧消息，但是你不知道这些操作确切的发生时间。
// 现在，你应该使用什么数据结构来保存关于消息“是否已读”的信息？该结构必须很适合对给定的 message 对象给出“它读了吗？”的答案。
// P.S. 当一个消息被从 messages 中删除后，它应该也从你的数据结构中消失。
// P.S. 我们不能修改 message 对象，例如向其添加我们的属性。因为它们是由其他人的代码管理的，我们修改该数据可能会导致不好的后果。
// let unread = new WeakMap();
// for (let i in messages) {
// 	unread.set(messages[i], true);
// }
// messages.splice(1, 1);
// alert(unread.get(messages[1]));
// 答案做法
// let readMessages = new WeakSet();
// // 两个消息已读
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages 包含两个元素
// // ……让我们再读一遍第一条消息！
// readMessages.add(messages[0]);
// // readMessages 仍然有两个不重复的元素
// // 回答：message[0] 已读？
// alert("Read message 0: " + readMessages.has(messages[0])); // true
// messages.shift();
// // 现在 readMessages 有一个元素（技术上来讲，内存可能稍后才会被清理）

// 保存阅读日期
// 这儿有一个和 上一个任务 类似的 messages 数组。场景也相似。
// let messages = [
// 	{ text: "Hello", from: "John" },
// 	{ text: "How goes?", from: "John" },
// 	{ text: "See you soon", from: "Alice" }
// ];
// // 现在的问题是：你建议采用什么数据结构来保存信息：“消息是什么时候被阅读的？”。
// // 在前一个任务中我们只需要保存“是 / 否”。现在我们需要保存日期，并且它应该在消息被垃圾回收时也被从内存中清除。
// // P.S.日期可以存储为内建的 Date 类的对象，稍后我们将进行介绍。
// let readDate = new WeakMap();
// readDate.set(messages[0], "2023.01.01.23:00");
// readDate.set(messages[1], "2023.01.02.23:00");


// =========================== Object.keys，values，entries =========================== //

// 属性求和
// 有一个带有任意数量薪水的 salaries 对象。
// 编写函数 sumSalaries(salaries)，该函数使用 Object.values 和 for..of 循环返回所有薪水的总和。
// 如果 salaries 是空对象，那么结果必须是 0。
// 举个例子：
// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };
// function sumSalaries(salaries) {
// 	let sum = 0;
// 	for (let val of Object.values(salaries)) {
// 		sum += +val;
// 	}
// 	return sum;
// }
// alert(sumSalaries(salaries)); // 650

// 计算属性数量
// 写一个函数 count(obj)，该函数返回对象中的属性的数量：
// let user = {
// 	name: 'John',
// 	age: 30
// };
// function count(obj) {
// 	return Object.keys(obj).length;
// }
// alert(count(user)); // 2
// 试着使代码尽可能简短。
// P.S. 忽略 Symbol 类型属性，只计算“常规”属性。

// 转换对象
// 对象缺少数组存在的许多方法，例如 map 和 filter 等。
// 如果我们想应用它们，那么我们可以使用 Object.entries，然后使用 Object.fromEntries：
// 1. 使用 Object.entries(obj) 从 obj 获取由键 / 值对组成的数组。
// 2. 对该数组使用数组方法，例如 map，对这些键 / 值对进行转换。
// 3. 对结果数组使用 Object.fromEntries(array) 方法，将结果转回成对象。
// 例如，我们有一个带有价格的对象，并想将它们加倍：
// let prices = {
// 	banana: 1,
// 	orange: 2,
// 	meat: 4,
// };
// let doublePrices = Object.fromEntries(
// 	// 将价格转换为数组，将每个键/值对映射为另一对
// 	// 然后通过 fromEntries 再将结果转换为对象
// 	Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
// alert(doublePrices.meat); // 8


// =========================== 解构赋值 =========================== //





























// =========================== 第2本 浏览器：文档，事件，接口 =========================== //
// =========================== Document =========================== //
// alert(location.href);
// if (confirm("Go to Baidu?")) {
// 	location.href = "https://www.baidu.com";
// }























