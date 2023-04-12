import ProductItem from './components/ProductItem/ProductItem';
import { data } from './data/data'
import s from './App.module.css'
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState(data)
  const [inputName, setInputName] = useState('')
  const [inputPrice, setInputPrice] = useState(0)
  const [inputCount, setInputCount] = useState(0)


  const addProduct = () => {
    let newProduct = {
      id: products.length + 1,
      name: `${inputName}`,
      price: `${inputPrice}`,
      count: `${inputCount}`
    }

    setInputName('')
    setInputPrice(0)
    setInputCount(1)
    setProducts([...products, newProduct])
  }

  const handleProductChange = (productId, count) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count }
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const handleProductDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId)
    setProducts(updatedProducts)
  }

  return (
    <div>
      <div className={s.input_container}>
        <label>Name<br />
          <input type='text' value={inputName} onChange={(e) => setInputName(e.target.value)} />
        </label>
        <label>Price<br />
          <input type='number' value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
        </label>
        <label>Count<br />
          <input type='number' value={inputCount} onChange={(e) => setInputCount(+e.target.value)} />
        </label>

        <button onClick={addProduct}>Add product</button>
      </div>

      <div className={s.container}>
        {products.map(elem => <ProductItem key={elem.id} product={elem} onProductChange={handleProductChange} onProductDelete={handleProductDelete} />)}
      </div>
    </div >



  );
}

export default App;
