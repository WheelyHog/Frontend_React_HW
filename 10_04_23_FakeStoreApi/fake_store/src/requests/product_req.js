const url = 'https://fakestoreapi.com/products'
const url_category = 'https://fakestoreapi.com/products/category'

export const products_req = (id, callback) => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(json => callback(json))
}

export const getCategory = (category, callback) => {
  fetch(`${url_category}/${category}`)
    .then(res => res.json())
    .then(json => callback(json))
}