import { MemberProvider } from '@/integrations';

export default function AppRouter({ children }: { children: React.ReactNode }) {
  return (
    <MemberProvider>
      {children}
    </MemberProvider>
  );
}
