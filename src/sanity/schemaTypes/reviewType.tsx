import { MdOutlineReviews } from 'react-icons/md';
import { defineField, defineType } from 'sanity';
import { FaStar } from 'react-icons/fa';

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  icon: MdOutlineReviews,
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      author: 'author',
      date: 'date',
      rating: 'rating',
    },
    prepare({ author, date, rating }) {
      const dateFormatted =
        date &&
        new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        });

      const ratingFormatted = Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} />
      ));

      return {
        title: `${author} | Rating: ${rating}`,
        subtitle: dateFormatted,
        media: (
          <span style={{ display: 'flex', color: '#f5c518', fontSize: '5px' }}>
            {ratingFormatted}
          </span>
        ),
      };
    },
  },
});
