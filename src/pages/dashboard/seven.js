import { Helmet } from 'react-helmet-async';
// sections
import SevenView from '../../sections/seven/view';

// ----------------------------------------------------------------------

export default function Page7() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Seven</title>
      </Helmet>

      <SevenView />
    </>
  );
}
