import { Home } from '@/pages/Home';
import type { RouteObject } from 'react-router-dom';

export const ROUTES_ITEM: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <Home />,
  },
];
