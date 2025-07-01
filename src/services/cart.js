// acoes meu carrinho pode fazer

// adicionar item do carrinho;

async function addItem(userCart, item){
    userCart.push(item);

}

// deletar item do carrinho;

async function deleteItem(userCart, name){

}

// remover um item;
async function removeItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// calcular total do carrinho;
async function calcTotal(userCart){
    console.log( userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export {addItem, deleteItem, removeItem, calcTotal};

