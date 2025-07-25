import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { vanType } from './vanType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, vanType],
};
