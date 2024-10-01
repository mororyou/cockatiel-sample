import { bulkhead } from 'cockatiel';

const bulkheadPolicy = bulkhead(2, Number.POSITIVE_INFINITY);

export { bulkheadPolicy };
