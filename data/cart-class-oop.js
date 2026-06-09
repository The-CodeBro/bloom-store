//using class constructor

class Cart {
    cartItems;

    localStorageKey;

    // #localStorageKey;
    //The above is a private property

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;

        this.loadFromStorage();
    }

    loadFromStorage() {
        // this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        //The above access a private class, using the #...we acces private props and methods in a class using the #

        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

        if (!this.cartItems) {
            this.cartItems = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: "1",
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: "2",
                },
            ];
        }
    }
    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: "1",
            });
        }

        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("business-cart-oop");

// cart.localStorageKey = "cart-oop";
// businessCart.localStorageKey = "business-cart-oop";

// cart.loadFromStorage();
// businessCart.loadFromStorage();

//cart.#localStorageKey = 'aaa'
//The above cant be accessed outside beacuse it is a private property.

console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);