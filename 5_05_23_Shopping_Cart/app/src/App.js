import s from './App.module.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={s.app}>
      <ShoppingCart />
    </div>
  );
}

export default App;
