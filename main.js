"use strict";
exports.__esModule = true;
var msg = "Hello Bro";
// console.log(msg);
var name = null;
var sentence = "My name is " + name + " i live in India and am a beginner in \n typeScipt"; // this is a wayt to embeding stings
//  console.log(sentence);
var aray = [3, 5, 6, 4];
// console.log(aray[2]);
var num = [23, 44, 23, 543, 34]; // To define the data type of array syntax
// console.log(num[3]);
var tuple = ["hello", false];
// console.log(tuple);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
    color[color["Yellow"] = 3] = "Yellow";
})(color || (color = {}));
var rang = color.Yellow;
//console.log(rang);
var randomValue = 40;
randomValue = false;
randomValue = "Vaibhav";
// console.log(randomValue);
var myVariable = 20; // Below are the demerits of Varaible of type any and to overcome this use type unknown
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
var newVariable = 20;
// console.log(newVariable.name);
// newVariable();
// newVariable.toUpperCase();
// Type Inference Example
var a;
a = 10;
a = true;
a = "hello bhai";
// We cant assign value of other type to b as of a it will cause an error.
var b = 20;
// b = true;
// Syntax to create a variable of multiType
var multiTypeVariable;
// Above the type of multiTypeVAriable as name given can be of string number or boolean
multiTypeVariable = "Vaibhav";
//console.log(multiTypeVariable);
function add(num1, num2) {
    return num1 + num2;
}
// Above function  add states that it accepts two variable num1 and num2 of type number and its return type is also a number
// console.log(add(4, 7));
function mul(n1, n2) {
    if (n2)
        return n1 * n2;
    else
        return n1;
}
// console.log(mul(3, 4));
// above just by using ? after n2 make it a optional parameter and tus if we not provide its
// value still fuction will work else it would thrown an error. this is call as optional parameter
// we can have any number of option parameter but it need to be declared after required parameter.
// default parameter can aslo be used as below;
function addition(a1, a2) {
    if (a2 === void 0) { a2 = 20; }
    return a1 + a2;
}
console.log(addition(10, 50));
