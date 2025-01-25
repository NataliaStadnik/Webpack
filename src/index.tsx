import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<span>Loading...</span>}>
            <LazyAbout />
          </Suspense>
        }
      />
      <Route
        path="shop"
        element={
          <Suspense fallback={<span>Loading...</span>}>
            <LazyShop />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>,
);
