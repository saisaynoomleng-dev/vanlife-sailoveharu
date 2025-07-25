import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <Bounded className="flex flex-col gap-3 home-hero min-h-[86vh] justify-center text-brand-white-100 relative">
      <div className="absolute inset-0 z-0 bg-black/50" />

      <p className="text-fs-700 font-semibold relative z-20">
        You got the travel plans, we got the travel vans.
      </p>

      <p className="relative z-20">
        Add adventure to your life by joining #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link href="/vans" className="relative z-20">
        <Button
          className="bg-brand-orange-400 text-brand-white-100"
          variant="link"
        >
          Find Your Van
        </Button>
      </Link>
    </Bounded>
  );
}
