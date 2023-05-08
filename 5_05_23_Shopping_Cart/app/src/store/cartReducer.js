const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const DEL_FROM_CART = 'DEL_FROM_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_CART = 'REMOVE_CART'


const defaultState = [
  { id: 1, title: 'Велосипед', image: './assets/bike.PNG', count: 5 },
  { id: 2, title: 'Самокат', image: './assets/samokat.PNG', count: 4 },
  { id: 3, title: 'Гантели', image: './assets/ganteli.PNG', count: 7 },
  { id: 4, title: 'Ракетки', image: './assets/raketki.PNG', count: 1 }
]

export const cartReducer = (state = defaultState, action) => {
  const copy_state = [...state]
  const product_item = copy_state.find(elem => elem.id === action.payload)

  switch (action.type) {
    case INCR_COUNT:
      if (product_item.count < 25) {
        product_item.count++
      }
      return copy_state
    case DECR_COUNT:
      product_item.count--
      return copy_state.filter(elem => elem.count > 0)
    case DEL_FROM_CART:
      return copy_state.filter(elem => elem.id !== action.payload)
    case ADD_TO_CART:
      const newProduct = {
        id: Date.now(),
        title: action.payload,
        image: './assets/no-image.png',
        count: 1
      }
      return [...copy_state, newProduct]
    case REMOVE_CART:
      return []
    default:
      return state
  }
}

export const incrCountAction = (payload) => ({ type: INCR_COUNT, payload })
export const decrCountAction = (payload) => ({ type: DECR_COUNT, payload })
export const delFromCartAction = (payload) => ({ type: DEL_FROM_CART, payload })
export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const removeCartAction = () => ({ type: REMOVE_CART })