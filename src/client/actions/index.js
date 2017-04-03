import { requestServer } from '../utils';
import 'universal-fetch';

export const HEROS_LOADED = 'heros/loaded';
export const HERO_LOADED = 'hero/loaded';
export const HERO_CLOSED = 'hero/closed';

const herosLoaded = heros => ({
  type: HEROS_LOADED,
  payload: heros,
});

export const loadHeros = () => (dispatch) => {
  console.log("LOAD_HEROS ...");
  requestServer('api/heros')
    .then((data) => dispatch(herosLoaded(data)))
    .catch(err => console.log('error: ', err));
};

const heroLoaded = hero => ({
  type: HERO_LOADED,
  payload: hero,
});

export const loadHero = id => (dispatch) => {
  const uri = `api/hero/${id}`;
  requestServer(uri)
    .then(hero => dispatch(heroLoaded(hero)))
    .catch(err => console.log('error: ', err));
};

export const closeHero = () => ({
  type: HERO_CLOSED,
});
