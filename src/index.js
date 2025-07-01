import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("welcome to Shopee cart!");

const item1 = await createItem("carrinho hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("carrinho hotwheels Volks", 20.99, 4);

//adicionando itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//visualizando carrinho
await cartService.displayCart(myCart);

//removendo itens
await cartService.removeItem(myCart, item2.name);

await cartService.calcTotal(myCart);
