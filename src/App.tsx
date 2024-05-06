import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';
import ProductsList from './components/ProductsList';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em Breve" background="black" />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <GlobalCss />
        <Header />
      </div>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;
