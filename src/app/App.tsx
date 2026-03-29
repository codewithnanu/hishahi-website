import { RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './routes';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  );
}
