"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Problem 1: Format String
const formatString = (input, isUpper = true) => {
    return isUpper ? input.toUpperCase() : input.toLowerCase();
};
const result1 = formatString("Hello");
console.log(result1);
const result2 = formatString("Hello", true);
console.log(result2);
const result3 = formatString("Hello", false);
console.log(result3);
// Problem 2: Filter by Rating
const filterByRating = (items) => {
    return items.filter((item) => item.rating >= 4);
};
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
const highRatedBooks = filterByRating(books);
console.log(highRatedBooks);
// Problem 3: Concatenate Arrays (Generic)
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
};
const stringArray = concatenateArrays(["a", "b"], ["c"]);
console.log(stringArray);
const numberArray = concatenateArrays([1, 2], [3, 4], [5]);
console.log(numberArray);
// Problem 4: Vehicle and Car Classes
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
    ;
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
    ;
}
const myCar = new Car("Toyota", 2020, "Corolla");
const carInfo = myCar.getInfo();
console.log(carInfo);
const carModel = myCar.getModel();
console.log(carModel);
// Problem 5: Process Value (Union Type)
const processValue = (value) => {
    return typeof value === "string" ? value.length : value * 2;
};
const resultWithString = processValue("hello");
console.log(resultWithString);
const resultNumber = processValue(10);
console.log(resultNumber);
const getMostExpensiveProduct = (products) => {
    if (products.length === 0) {
        return null;
    }
    else {
        const mostExpensive = products.reduce((max, current) => {
            if (current.price > max.price) {
                return current;
            }
            else {
                return max;
            }
        });
        return mostExpensive;
    }
};
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
const expensiveProduct = getMostExpensiveProduct(products);
console.log(expensiveProduct);
// Problem 7: Day Enum and Type Function
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const getDayType = (day) => {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
};
const testDay1 = getDayType(Day.Monday);
console.log(testDay1);
const testDay2 = getDayType(Day.Sunday);
console.log(testDay2);
// Problem 8: Async Square Function
const squareAsync = (n) => __awaiter(void 0, void 0, void 0, function* () {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
});
const asyncResult = squareAsync(4).then((res) => {
    const squaredValue = res;
    console.log(squaredValue);
});
const asyncError = squareAsync(-3).catch((err) => {
    const errorMsg = err;
    console.error(errorMsg);
});
