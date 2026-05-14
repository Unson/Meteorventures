import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import FreeAuditPage from './pages/FreeAuditPage';
import ContactPage from './pages/ContactPage';
import PartnersPage from './pages/PartnersPage';
import TransmissionsPage from './pages/TransmissionsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "services",
        element: <ServicesPage />
      },
      {
        path: "insights",
        element: <InsightsPage />
      },
      {
        path: "insights/:id",
        element: <InsightDetailPage />
      },
      {
        path: "free-audit",
        element: <FreeAuditPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "partners",
        element: <PartnersPage />
      },
      {
        path: "transmissions",
        element: <TransmissionsPage />
      },
      {
        path: "*",
        element: <HomePage />
      }
    ]
  }
], {
  basename: import.meta.env.BASE_URL,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
