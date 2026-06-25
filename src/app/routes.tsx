import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { LandingPage } from './pages/LandingPage';
import { InvestorPage } from './pages/InvestorPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { RidePoolingPage } from './pages/features/RidePoolingPage';
import { ParcelPoolingPage } from './pages/features/ParcelPoolingPage';
import { TripPoolingPage } from './pages/features/TripPoolingPage';
import { TeamPage } from './pages/TeamPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: 'investors', Component: InvestorPage },
      { path: 'about', Component: AboutPage },
      { path: 'privacy', Component: PrivacyPolicyPage },
      { path: 'terms', Component: TermsOfServicePage },
      { path: 'features/ride-pooling', Component: RidePoolingPage },
      { path: 'features/parcel-pooling', Component: ParcelPoolingPage },
      { path: 'features/trip-pooling', Component: TripPoolingPage },
      { path: 'team', Component: TeamPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);

