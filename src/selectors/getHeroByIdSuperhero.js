import { heroes } from '../data/heroes';

export const getHeroesBySuperhero = (superhero = '') => {
  if (superhero === '') {
    return [];
  }

  superhero = superhero.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(superhero));
}