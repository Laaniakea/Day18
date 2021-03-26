let shoppingList= new Map([
[Banana, amount, 3]
[groceries, Pineapple, amount, 1],
[groceries, Pear, amount, 2],
[groceries, Carrot, amount, 10],
[groceries, Apple, amount, 1]
])

for(let groceries of shoppingList.amount()){
    console.log(`${amount[0]}:${amount[1]}`);
}
module.exports={shoppinglist, arrKey, arrValue};