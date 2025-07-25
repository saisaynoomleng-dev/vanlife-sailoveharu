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
