import App from '@/App';
import ProfilePengguna from '@/pages/ProfilPengguna';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router';
import ProfilDetail from '@/pages/ProfilDetail';

export const myRouter = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile', // best practice penulisan path route (kebab-case)
    element: <ProfilePengguna />,
  },
  {
    path: '/profile/:id',
    element: <ProfilDetail />,
  },
]);
