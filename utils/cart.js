import { Avail } from './avail'

class Cart {    
    constructor() {
        if (!Cart.singleCart) {
            this._data = {
                cartCount: 0,
                cartValue: 0.00
            }
            Cart.singleCart = this
        }
        return Cart.singleCart
    }

    addToCart(product, quantity) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof(product) !== 'undefined' && typeof(quantity !== 'undefined')) {
                    var inStockPromise = Avail.inStock(product)
                    inStockPromise.then((result) => {
                        if(result) { //if the item is in stock
                            this._data.cartCount += quantity //update cart
                            this._data.cartValue += quantity * parseFloat(product.price)
                            console.log(product.id + ": " + quantity)
                            resolve(this._data.cartCount + " | $" + this._data.cartValue) //send output string
                        }
                        else {
                            resolve(false) //no output string
                        }
                    }).catch(function (err) {
                        console.error(err)
                    })
                }
                else{ //print cart contents even if product or quantity are undefined
                    resolve(this._data.cartCount + " | $" + this._data.cartValue)
                }
            }, 1000)
        })
    }
}

const singleCart = new Cart();

export default singleCart;