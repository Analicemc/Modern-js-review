'use strict';

class Item{
    constructor(name, category){
        this.name = name;
        this.category = category;
    }

}

class PurchasedItem extends Item{
    constructor(name, category, price){
        super(name, category);
        this.price = price;
    }

    getDetailsWithPrice(){
        return `${this.name} - ${this.category} - R$ ${this.price}`;
    }
}

let item = new Item("Coffee", "Food");
item.category = 'Drink'

let pItem = new PurchasedItem('Sugar', 'Food', '2.49');
document.getElementById('output').innerHTML = pItem.getDetailsWithPrice();
