import { Center, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES_ITEM } from './constants/routeItems';
import { ErrorBoundary } from '@sentry/react';
export const MainRouter = () => {
  const routes = useRoutes(ROUTES_ITEM);
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Center w='full' h='full' bg='neutral.gradient.main'>
            <Spinner />
          </Center>
        }
      >
        {routes}
      </Suspense>
    </ErrorBoundary>
  );
};
