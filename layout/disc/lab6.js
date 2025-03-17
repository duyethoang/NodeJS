"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Personn = class Personn {
    name = "Max";
    constructor() {
        console.log("Creating person object...");
    }
};
Personn = __decorate([
    Logger
], Personn);
const pers = new Personn();
console.log(pers);
// 2
function Loggerr(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Personnn = class Personnn {
    name = "Max";
    constructor() {
        console.log("Creating person object...");
    }
};
Personnn = __decorate([
    Loggerr("LOGGING - PERSON")
], Personnn);
// 3
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
class Product {
    title;
    _price;
    set price(val) { }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax() { }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//4
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Productt {
    title;
    _price;
    set price(val) { }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax() { }
}
__decorate([
    Log3
], Productt.prototype, "getPriceWithTax", null);
// 5
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDesciptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDesciptor;
}
class Printer {
    messsage = "This works!";
    showMessage() {
        console.log(this.messsage);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage();
const btn = document.querySelector("button");
btn.addEventListener("click", p.showMessage);
