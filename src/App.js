import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store } from './store'
// import { store, persistor } from './store/configureStore'

import './App.css';
import Header from './views/shared/components/Header';
import ProductList from './views/product/ProductList';

const App = () => {
  return (
    <Provider {...{ store }}>
      <div id="main">
        <Header />
        <div className="cart-main-area mtb-60px">
          <div className="container">
            <ProductList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
