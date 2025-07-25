import { BiDetail } from 'react-icons/bi';
import { FaShuttleVan } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { defineField, defineType } from 'sanity';
import vanPriceInput from './components/vanPriceInput';

export const vanType = defineType({
  name: 'van',
  title: 'Van',
  icon: FaShuttleVan,
  groups: [
    { name: 'details', title: 'Details', icon: BiDetail },
    { name: 'editorials', title: 'Editorials', icon: MdPermMedia },
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(5)
          .warning(`Van title must have at least 5 characters`),
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule.required().error('Required to generate a page on the website'),
      hidden: ({ document }) => !document?.title,
      group: 'details',
    }),
    defineField({
      name: 'type',
      title: 'Van Type',
      type: 'string',
      options: {
        list: ['simple', 'rugged', 'luxury'],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().error('Require to generate a page on the website'),
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Rental Price',
      type: 'number',
      initialValue: 50,
      components: {
        input: vanPriceInput,
      },
      validation: (rule) =>
        rule.required().error('Require to generate a page on the website'),
      group: 'details',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      description: (
        <details>
          <summary>Why is this important?</summary>
          It helps the customer deciding which van would be the best and
          suitable for them.
        </details>
      ),
      validation: (rule) =>
        rule
          .required()
          .min(20)
          .error('Van Description must have at least 20 character'),
      group: 'details',
    }),
    defineField({
      name: 'mainImage',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) =>
            rule.required().info('Required for accessibility'),
        }),
      ],
      group: 'editorials',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      vanType: 'type',
      price: 'price',
      image: 'mainImage',
    },
    prepare({ title, vanType, price, image }) {
      const priceFormatted =
        price &&
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);
      return {
        title: title ? `${title}` : '',
        subtitle:
          vanType && price
            ? `${vanType.toUpperCase()} | ${priceFormatted}/day`
            : price,
        media: image || FaShuttleVan,
      };
    },
  },
});
