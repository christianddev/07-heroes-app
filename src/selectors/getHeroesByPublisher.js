import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher = '') => {
	publisher = publisher.toLowerCase();
  const validPublishers = ['dc comics', 'marvel comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`publisher ${publisher} invalid`)
  }
  return heroes.filter((hero) => hero.publisher.toLowerCase() === publisher);
}