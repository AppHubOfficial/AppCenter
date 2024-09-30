import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Home from './pages/Home';
import Page404 from './pages/Page404';
/*import About from './pages/About';
import Contact from './pages/Contact';
import ChatRoom from './pages/ChatRoom';*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
