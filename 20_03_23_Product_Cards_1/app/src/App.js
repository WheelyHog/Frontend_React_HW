import React, { useState } from "react";
import { data } from "./data/data";
import ProductItem from "./components/ProductItem/ProductItem";
import s from './App.module.css'
import Cart from "./components/Cart/Cart";


function App() {

    let [products, setProducts] = useState(data)
    let [cart, setCart] = useState([])


    const submit_form = event => {
        event.preventDefault()
        const { name, price, count } = event.target

        const product = {
            id: products.length + 1,
            name: name.value,
            price: price.value,
            count: count.value
        }
        products = [...products, product]
        setProducts(products)

        name.value = ''
        price.value = ''
        count.value = ''
    }

    const incr_count = (id, event) => {
        const newProducts = products.map(elem => {
            if (elem.id === id) {
                elem.count += 1
            }
            return elem
        })
        setProducts(newProducts)
    }

    const decr_count = (id) => {

        const newProducts = products.map(elem => {
            if (elem.id === id) {
                if (elem.count > 0) {
                    elem.count -= 1
                }

            }
            return elem
        })
        setProducts(newProducts)
    }

    const deleteProduct = (id) => {
        const newProducts = products.filter(elem => elem.id !== id)
        setProducts(newProducts)
    }

    const addToCart = (id) => {

        const newProducts = products.map(elem => {
            if (elem.id === id) {
                if (elem.count > 0) {
                    cart.push({
                        id: elem.id,
                        name: elem.name,
                        price: elem.price,
                        count: 1
                    })
                    elem.count--
                }

            }
            return elem
        })
        setProducts(newProducts)

        const newCart = cart.map(elem => {
            if (elem.id === id) {
                elem.count = 1
            }
            return elem
        })
        setCart(newCart)

    }

    const incrCart = (id) => {
        let newCart = [...cart]
        const newProducts = products.map(elem => {
            if (elem.id === id) {
                if (elem.count > 0) {
                    elem.count--
                    newCart = cart.map(elem => {
                        if (elem.id === id) {
                            elem.count++
                        }
                        return elem
                    })
                } else alert('Not enough products!')
            }
            return elem
        })
        setProducts(newProducts)
        setCart(newCart)
    }

    const decrCart = (id) => {
        const newCart = cart.map(elem => {
            if (elem.id === id) {
                if (elem.count > 0) {
                    elem.count--
                }
                else {
                    alert('Count == 0!')
                }
                const newProducts = products.map(elem => {
                    if (elem.id === id) {
                        elem.count++
                    }
                    return elem
                })
                setProducts(newProducts)
            }
            return elem
        })
        setCart(newCart)

    }

    return (
        <div className={s.form_container}>
            <form onSubmit={submit_form}>
                <input type='text' name='name' />
                <input type='number' name='price' />
                <input type='number' name='count' />
                <button type='submit'>Add Product</button>
            </form>
            <div className={s.container}>
                {products.map((elem, index) => <ProductItem
                    key={index}
                    name={elem.name}
                    price={elem.price}
                    count={elem.count}
                    incr_count={incr_count}
                    decr_count={decr_count}
                    deleteProduct={deleteProduct}
                    addToCart={addToCart}
                    id={elem.id}
                />)}
            </div>
            <div className={s.cart}>
                <h2>Cart</h2>
                {cart.map((elem, index) => <Cart id={elem.id} name={elem.name} price={elem.price} quantity={elem.count} key={index} incrCart={incrCart} decrCart={decrCart} />)}
            </div>
        </div>
    );
}

export default App;
