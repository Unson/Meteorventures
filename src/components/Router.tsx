import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ServicesPage from '@/components/pages/ServicesPage';
import InsightsPage from '@/components/pages/InsightsPage';
import InsightDetailPage from '@/components/pages/InsightDetailPage';
import FreeAuditPage from '@/components/pages/FreeAuditPage';
import ContactPage from '@/components/pages/ContactPage';
import PartnersPage from '@/components/pages/PartnersPage';

// Layout component that includes ScrollToTop
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "services",
        element: <ServicesPage />,
        routeMetadata: {
          pageIdentifier: 'services',
        },
      },
      {
        path: "insights",
        element: <InsightsPage />,
        routeMetadata: {
          pageIdentifier: 'insights',
        },
      },
      {
        path: "insights/:id",
        element: <InsightDetailPage />,
        routeMetadata: {
          pageIdentifier: 'insight-detail',
        },
      },
      {
        path: "free-audit",
        element: <FreeAuditPage />,
        routeMetadata: {
          pageIdentifier: 'free-audit',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "partners",
        element: <PartnersPage />,
        routeMetadata: {
          pageIdentifier: 'partners',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
