import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Bounded>
      <Image
        width={768}
        height={300}
        src="/about-hero.png"
        alt="a man sitting on the roof of the van looking at the sky full of stars"
      />

      <h1 className="font-bold text-fs-700 leading-8">
        Don&apos;t squeeze in a sedan when you could relax in a van.
      </h1>

      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra)
      </p>

      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>

      <div className="bg-brand-orange-300 px-3 py-5 flex justify-center flex-col gap-3">
        <p className="font-bold text-fs-500">Your destination is waiting.</p>
        <p className="font-bold text-fs-500">Your van is ready.</p>
        <Link href="/vans">
          <Button
            variant="link"
            className="bg-brand-black-200 text-brand-white-100"
          >
            Explore our vans
          </Button>
        </Link>
      </div>
    </Bounded>
  );
};

export default AboutPage;
