import data from '../data.json';
const names = [];
const index = [];
data.mains.map((mainDish) => {
    const mainNames = mainDish.name;
    const mainsIndex = mainDish.index;
    console.log(mainNames);
    names.push(mainNames);
    index.push(mainsIndex);
});
data.drinks.map((drink) => {
    const drinkNames = drink.name;
    const drinkIndex = drink.index;
    names.push(drinkNames);
    index.push(drinkIndex);
});
data.sides.map((side) => {
    const sideNames = side.name;
    const sideIndex = side.index;
    names.push(sideNames);
    index.push(sideIndex);
});
console.log(names);
console.log(index);
const orderedDish = 'mains-1';
if (index.indexOf(orderedDish) !== -1) {
    let id = index.indexOf(orderedDish);
    console.log(names[id]);
}
function Total() {
    return (CHECKING < /h1>
        < />);
}
export default Total;
