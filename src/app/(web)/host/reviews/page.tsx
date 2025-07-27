import Bounded from '@/components/Bounded';
import { dateFormatted } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { REVIEWS_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { FaStar } from 'react-icons/fa';

const HostReviewPage = async () => {
  const { data: reviews } = await sanityFetch({ query: REVIEWS_QUERY });

  if (!reviews) notFound();

  return (
    <Bounded>
      <h3 className="font-bold text-fs-500">Your Reviews</h3>

      {/* reviews percentage */}

      <div className="flex flex-col space-y-3">
        <h3>Reveiws({reviews.length})</h3>

        <div className="flex flex-col gap-y-5">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="flex flex-col gap-y-2 border-b pb-2"
            >
              <div className="flex gap-x-2">
                {review.rating &&
                  Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} className="text-brand-orange-500" />
                  ))}
              </div>

              <div className="flex gap-x-2">
                <p className="font-semibold">{review.author}</p>
                {review.date && (
                  <p className="text-brand-black-200/80">
                    {dateFormatted(review.date)}
                  </p>
                )}
              </div>

              <p>{review.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default HostReviewPage;
