import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import Page404 from './pages/Page404';
import MiniDrawer from './components/MiniDrawer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MiniDrawer />
      </>
    ),
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
