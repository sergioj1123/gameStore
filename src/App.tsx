import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Banner />,
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
