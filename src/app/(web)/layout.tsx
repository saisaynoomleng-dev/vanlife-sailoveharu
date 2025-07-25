import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';

const WebLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      {children} <SanityLive />
    </main>
  );
};

export default WebLayout;
