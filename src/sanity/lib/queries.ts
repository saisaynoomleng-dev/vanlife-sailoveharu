import { defineQuery } from 'next-sanity';

export const VANS_QUERY = defineQuery(`
    *[_type == 'van' 
  && defined(slug.current)
  && (
    (!defined($filter))
    || $filter == null
    || type match $filter
  )] 
  | order(name asc) {
  title,
  price,
  slug,
  type,
  "imageURL": mainImage.asset->{url}, 
  "imageAlt": mainImage.alt
}
`);

export const VAN_QUERY = defineQuery(`
    *[_type == 'van' 
  && slug.current == $slug][0]
  {
  title,
  price,
  slug,
  type,
  "imageURL": mainImage.asset->{url}, 
  "imageAlt": mainImage.alt,
  desc
}
`);

export const HOST_VANS_QUERY = defineQuery(`
  
*[_type == 'van'
 && defined(slug.current)]
|order(title asc)
{
  title,
  price,
  slug,
  'imageURL': mainImage.asset->{url},
  'imageAlt': mainImage.alt
 }`);

export const HOST_VAN_QUERY = defineQuery(`
  *[_type == 'van'
    && defined(slug.current)
    && slug.current == $slug][0]{
  title,
  price,
  desc,
  'imageURL': mainImage.asset->{url},
  'imageAlt': mainImage.alt,
  slug,
  type,
 }
  `);

export const REVIEWS_QUERY = defineQuery(`
  *[_type == 'review' 
 && defined(_id)]
|order(date desc){
  author,
  rating,
  date,
  desc,
  _id
 }`);
