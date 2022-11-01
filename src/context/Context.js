import { createContext, useReducer, useContext } from 'react'
import { faker } from '@faker-js/faker'
import { cartReducer } from './Reducers';

const Cart = createContext();
faker.seed(99)
const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(640, 480, true),
        fastDelivery: faker.datatype.boolean(),
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })


    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}