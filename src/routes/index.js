import { HashRouter, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
//

import Dashboard from '../pages/dashboard';
import Page2 from '../pages/dashboard/two';
import Page from '../pages/dashboard/one';

const RouteWrapper = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </HashRouter>
);

export default RouteWrapper;

/* <>
<BrowserRouter>

  <Routes>

    <Route path="/two" element={<Page2 />} />
  </Routes>
</BrowserRouter>

<HashRouter>
  <Routes>
    <Route path="/one" element={<Page />} />
  </Routes>
</HashRouter>
</> */
