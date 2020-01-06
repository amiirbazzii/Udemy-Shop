export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartitem => cartitem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartitem => 
            cartitem.id === cartItemToAdd.id
            ? {...cartitem , quntity: cartitem.quntity + 1 }
            : cartitem
        )
    }
    return [ ...cartItems, {...cartItemToAdd , quntity : 1}]
}