import { Helmet } from 'react-helmet-async';
import NineView from 'src/sections/nine/view';

export default function Page9() {
  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <NineView />
    </>
  );
}
