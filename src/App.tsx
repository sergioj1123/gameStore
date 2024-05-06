import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import { GlobalCss } from './styles/styles';
import Home from './pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
