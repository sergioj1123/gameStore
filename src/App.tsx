import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';
import Router from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GlobalCss />
        <Header />
      </div>
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
