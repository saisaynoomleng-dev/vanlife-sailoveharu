import HostHeader from '../../../components/HostHeader';

export default function hostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <HostHeader />
      {children}
    </main>
  );
}
