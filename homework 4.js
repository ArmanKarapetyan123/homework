/*
1.Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.
2.Include a method to calculate the total price by multiplying the price by the quantity (quantity: քանակ, պետք ա փոխանվել ֆունկցիային որպես պարամետր).
3.Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the additional tax.
4.Override the total price calculation method to add the special tax amount to the total price calculation.
5.Create an instance of the PersonalCareProduct class and calculate its total price.
*/ 

class Product{
    constructor(id, name, price ,quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalPrice(){
        return this.quantity * this.price;
    }
}

class PersonalCareProduct extends Product{
    constructor(id, name, price ,quantity, tax){
        super(id, name, price, quantity);
        this.tax = tax;
    }
    totalPrice(quantity){
        return super.totalPrice(quantity) + this.tax;
    }
}

const product1 = new PersonalCareProduct(1, "tea", 100, 5 ,10);
const product2 = new PersonalCareProduct(2, "coffee", 110, 10, 11);

console.log(product1.totalPrice());
console.log(product2.totalPrice());
