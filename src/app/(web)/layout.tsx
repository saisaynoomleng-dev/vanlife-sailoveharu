import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';
import NavMenu from '@/components/NavMenu';
import Footer from '@/components/Footer';

const WebLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavMenu />
      {children}
      <Footer />

      <SanityLive />
    </main>
  );
};

export default WebLayout;
