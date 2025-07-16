// Write your solution in this file!

const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';
// both are global scopes, outside of any function

function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }
}
// block-scoped variable and function is declared inside the block