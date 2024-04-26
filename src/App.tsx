import Banner from './components/Banner';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';

function App() {
  return (
    <>
      <div className="container">
        <GlobalCss />
        <Header />
      </div>
      <Banner />
    </>
  );
}

export default App;
