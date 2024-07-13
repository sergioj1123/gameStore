import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles/styles';
import Header from './components/Header';
import Router from './routes';
import Footer from './components/Footer';
import { store } from './store';

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
      </BrowserRouter>
    </Provider>
  );
}

export default App;
