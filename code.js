//swapping strings  without using third variable
var a1 = "hiimdeveloper";
var c1 = "reactjsfrontend";
console.log(a1, c1);
[c1, a1] = [a1, c1];
console.log(a1, c1);

var a = "zzzzabczzzz";
var c = "defqqqqqqqqqqqqqqqwwwwww";
console.log(a, c);
a = a + c;
c = a.substring(0, a.length - c.length);
a = a.substring(c.length);
console.log(a, c);

//swapping numbers without using third variable

var n1 = 5;
var n2 = 6;
console.log(n1, n2);
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;
console.log(n1, n2);

let n3 = 50;
let n4 = 60;
console.log(n3, n4);
[n4, n3] = [n3, n4];
console.log(n3, n4);

//object and array destructuring

let obj = {
  y: 10,
  z: 20,
};
console.log(obj);

//[obj.y, obj.z] = [obj.z, obj.y];
obj.y = obj.y + obj.z;
obj.z = obj.y - obj.z;
obj.y = obj.y - obj.z;
console.log(obj);

//string reversal without using any inbuilt methods
let str = "sukeshtyagi";
let reversedString = "";
for (let char of str) {
  reversedString = char + reversedString;
}
console.log(reversedString);

let secondReversedString = "";
str
  .split("")
  .forEach((char) => (secondReversedString = char + secondReversedString));
console.log(reversedString);

var x = Math.floor(Math.random());
console.log(x);

//flatten a nested array
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//using array destructuring
let [ar1, ar2, ar3] = arr;
let a4 = ar1.concat(ar2, ar3);
console.log(a4);

//using array.reduce
let flattenAry1 = arr.reduce((acc, curr) => acc.concat(...curr), []);
console.log(flattenAry1);

//using loop and no inbuilt methods

let flattenAry2 = [];
arr.forEach((item) => (flattenAry2 = flattenAry2.concat(...item)));
console.log(flattenAry2);

//unique values arry from mixed values array

//set operator
let mixedAry = [1, 2, 3, 4, 1, 2, 5, 7, 8, 7, 9];
let uniqueAry = [...new Set(mixedAry)];
console.log(uniqueAry);

//filter,index, includes method
let aq = mixedAry.filter(
  (item, index, self) => self.indexOf(item) === self.lastIndexOf(item)
);
console.log(aq);

let aq1 = mixedAry.filter((item, index, self) =>
  self.includes(item, index + 1)
);
console.log(aq1);
let uniqueAry2 = aq.concat(aq1);
console.log(uniqueAry2);
