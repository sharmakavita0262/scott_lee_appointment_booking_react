import { Helmet } from 'react-helmet-async';
// sections
import FiveView from '../../sections/five/view';

// ----------------------------------------------------------------------

export default function Page5() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Five</title>
      </Helmet>

      <FiveView />
    </>
  );
}
