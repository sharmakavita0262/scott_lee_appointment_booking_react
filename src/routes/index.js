import { HashRouter, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

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
