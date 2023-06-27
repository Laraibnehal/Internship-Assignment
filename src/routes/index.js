import { Signup, ErrorPage } from '../pages';

const routes = [
  {
    key: '1',
    path: '/',
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
