import AppRouter from './router/AppRouter';
import { DrawerHeader } from './components/drawer/DrawerHeader';
import { Layout } from './components/layout';

export default function App() {
  return (
    <Layout>
      <>
        <DrawerHeader />
        <AppRouter />
      </>
    </Layout>
  );
}
