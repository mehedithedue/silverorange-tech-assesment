import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import RepoDetails from './components/RepoDetails';
import RepoList from './components/RepoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RepoList />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'repo',
    element: <RepoList />,
    children: [
      {
        path: ':repoId',
        element: <RepoDetails />,
      },
    ],
  },
]);

export default router;
