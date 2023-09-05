// scrollbar
// import 'simplebar-react/dist/simplebar.min.css';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

// routes
import RouteWrapper from './routes/index';
// import Router from 'src/routes/sections';
// theme
// import ThemeProvider from './theme/index'
// hooks
// import { useScrollToTop } from './routes/hooks/use-pathname'
// components
// import ProgressBar from './components/progress-bar/progress-bar'
// import { MotionLazy } from 'src/components/animate/motion-lazy';
// import SettingsProvider from './components/settings/context/settings-provider'
// auth
// import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';

// ----------------------------------------------------------------------

export default function App() {
  const charAt = `

  ░░░    ░░░
  ▒▒▒▒  ▒▒▒▒
  ▒▒ ▒▒▒▒ ▒▒
  ▓▓  ▓▓  ▓▓
  ██      ██

  `;

  console.info(`%c${charAt}`, 'color: #5BE49B');

  // useScrollToTop();

  return <RouteWrapper />;
}
// <AuthProvider>
/* <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      > */
/* <ThemeProvider> */
/* <MotionLazy> */
/* <SettingsDrawer /> */
/* <ProgressBar /> */
/* // <AuthConsumer> */
// <RouteWrapper />
/* </AuthConsumer> */
/* </MotionLazy> */
/* </ThemeProvider> */
/* </SettingsProvider> */
/* </AuthProvider> */
