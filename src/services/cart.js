// acoes meu carrinho pode fazer

// adicionar item do carrinho;

async function addItem(userCart, item) {
  userCart.push(item);
}

// deletar item do carrinho;

async function deleteItem(userCart, name) {}

// remover um item;
async function removeItem(userCart, index) {

    const deleteIndex = index - 1;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}

// calcular total do carrinho;
async function calcTotal(userCart) {
  console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

//mostrar carrinho
async function displayCart(userCart) {
  console.log("Shopee cart list");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } x | Subtotal: R$ ${item.subtotal()}`
    );
  });
}

export { addItem, deleteItem, removeItem, calcTotal, displayCart };
