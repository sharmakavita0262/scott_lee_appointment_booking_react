import { Helmet } from 'react-helmet-async';
// sections
import ThreeView from 'src/sections/three/view';

// ----------------------------------------------------------------------

export default function Page3() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Three</title>
      </Helmet>

      <ThreeView />
    </>
  );
}
