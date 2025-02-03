import App from '../App';
// import { createBrowserRouter } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { Suspense } from 'react';
import Spinner from '../components/Spinner.jsx';

// Common Suspense Wrapper Component
const lazyLoad = (importElement) => {
  const LazyComponent = React.lazy(importElement);
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     name: 'login',
//     element: lazyLoad(() => import('../layouts/login.jsx')),
//   },
//   {
//     path: "/reset-password",
//     name: 'reset-password',
//     element: lazyLoad(() => import('../pages/ResetPassword/index.jsx')),
//   },
//   {
//     path: "/register",
//     name: 'register',
//     element: lazyLoad(() => import('../pages/Register/index.jsx')),
//   }
// ]);
//
// export default router;

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={lazyLoad(() => import("../layouts/login.jsx"))} />
        <Route path="/reset-password" element={lazyLoad(() => import("../pages/ResetPassword/index.jsx"))} />
        <Route path="/register" element={lazyLoad(() => import("../pages/Register/index.jsx"))} />
      </Routes>
    </HashRouter>
  );
}
