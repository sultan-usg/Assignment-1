const formatString = (input: string, isUpper: boolean = true): string => {
      return isUpper ? input.toUpperCase() : input.toLowerCase();
};
const result1 = formatString("Hello");
console.log(result1);

const result2 = formatString("Hello", true);
console.log(result2);

const result3 = formatString("Hello", false);
console.log(result3);



const filterByRating = (
      items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
      return items.filter((item) => item.rating >= 4);
};

const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 },
];
const highRatedBooks = filterByRating(books);
console.log(highRatedBooks);




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
      return arrays.reduce((acc, curr) => acc.concat(curr), []);
};
const stringArray = concatenateArrays(["a", "b"], ["c"]);
console.log(stringArray);

const numberArray = concatenateArrays([1, 2], [3, 4], [5]);
console.log(numberArray);




class Vehicle {
      private make: string;
      private year: number;

      constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
      }

      getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
      };
}

class Car extends Vehicle {
      private model: string;

      constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
      }

      getModel(): string {
            return `Model: ${this.model}`;
      };
}

const myCar = new Car("Toyota", 2020, "Corolla");
const carInfo = myCar.getInfo();
console.log(carInfo);

const carModel = myCar.getModel();
console.log(carModel);



const processValue = (value: string | number): number => {
      return typeof value === "string" ? value.length : value * 2;
};
const resultWithString = processValue("hello");
console.log(resultWithString);

const resultNumber = processValue(10);
console.log(resultNumber);




interface Product {
      name: string;
      price: number;
}
const getMostExpensiveProduct = (products: Product[]): Product | null => {
      if (products.length === 0) {
            return null;
      } else {
            const mostExpensive = products.reduce((max, current) => {
                  if (current.price > max.price) {
                        return current;
                  } else {
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




enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
}

const getDayType = (day: Day): string => {
      return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
};
const testDay1 = getDayType(Day.Monday);
console.log(testDay1);

const testDay2 = getDayType(Day.Sunday);
console.log(testDay2);



const squareAsync = async (n: number): Promise<number> => {
      if (n < 0) {
            throw new Error("Negative number not allowed");
      }

      return new Promise((resolve) => {
            setTimeout(() => {
                  resolve(n * n);
            }, 1000);
      });
};

const asyncResult = squareAsync(4).then((res) => {
      const squaredValue = res;
      console.log(squaredValue);
});

const asyncError = squareAsync(-3).catch((err) => {
      const errorMsg = err;
      console.error(errorMsg);
});
