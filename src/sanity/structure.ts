import { FaShuttleVan } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Van Life')
    .items([
      S.documentTypeListItem('van').title('Vans').icon(FaShuttleVan),
      S.documentTypeListItem('review').title('Reviews').icon(MdOutlineReviews),
    ]);
