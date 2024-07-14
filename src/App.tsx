import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles/styles';
import Header from './components/Header';
import Router from './routes';
import Footer from './components/Footer';
import { store } from './store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <GlobalCss />
          <Header />
        </div>
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
