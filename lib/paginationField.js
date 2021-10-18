/* eslint-disable no-plusplus */
import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // Tells Apollo we will take care of everything.
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      // Check if we have existing items. Use filter to remove undefined.
      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length === first || (items.length && page === pages)) {
        // Found them in cache.
        return items;
      }
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // Apollo went to the network and came back with stuff.
      // We will tell Apollo how to put them in the cache.
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
