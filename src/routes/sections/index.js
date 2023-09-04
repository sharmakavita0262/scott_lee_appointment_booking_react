import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
//
import { mainRoutes } from './main';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import Dashboard from '../../pages/dashboard';
import Page2 from '../../pages/dashboard/two';
import Page from '../../pages/dashboard/one';

const RouteWrapper = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      {/* <Route path="/two" element={<Page2 />} />
      <Route path="/two" element={<Page2 />} /> */}
    </Routes>
  </HashRouter>
);

export default RouteWrapper;

// return useRoutes([
//   {
//     path: '/',
//     element: <Navigate to={PATH_AFTER_LOGIN} replace />,
//   },

//   // Auth routes
//   ...authRoutes,

//   // Dashboard routes
//   ...dashboardRoutes,

//   // Main routes
//   ...mainRoutes,

//   // No match 404
//   { path: '*', element: <Navigate to="/404" replace /> },
// ]);
