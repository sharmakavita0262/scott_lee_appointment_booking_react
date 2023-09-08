import { Helmet } from 'react-helmet-async';
import EightView from 'src/sections/eight/view';
// sections

// ----------------------------------------------------------------------

export default function Page8() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Five</title>
      </Helmet>

      <EightView />
    </>
  );
}
