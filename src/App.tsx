import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GlobalCss />
        <Header />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
