import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shell from './components/Shell';
import WelcomePage from './pages/WelcomePage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'todo',
        element: <TodoPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
