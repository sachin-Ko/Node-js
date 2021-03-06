const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderDelivery: function ({ time, starterIndex, mainIndex, address }) {
        console.log(`Your order ${this.mainMenu[starterIndex]} , ${this.starterMenu[mainIndex]} will be
        received to ${address} at ${time}`)
    }
};

//Change name of properties
const { name: restaurantName, openingHours: Hours } = restaurant
console.log(restaurantName, Hours);

//Default values.

const { Menu = [], starterMenu: starters = [] } = restaurant
console.log(Menu, starters);

//
restaurant.orderDelivery({
    time: '20:00',
    address: 'Via del Sole,21',
    mainIndex: 2,
    starterIndex: 2
})

